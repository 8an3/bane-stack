import { Authenticator } from "remix-auth";
import { TOTPStrategy } from "remix-auth-totp";
import { prisma } from "~/libs";
import type { Clientfile } from "@prisma/client";
import { authSessionStorage } from "~/sessions/auth-session.server";
import { sendAuthEmail } from "~/modules/otp/email";

export let authenticator = new Authenticator<Clientfile>(authSessionStorage, { throwOnError: true });

authenticator.use(
	new TOTPStrategy(
		{
			secret: process.env.ENCRYPTION_SECRET,
			magicLinkPath: "/auth/magic-link",
			sendTOTP: async ({ email, code, magicLink }) => {
				if (process.env.NODE_ENV === "development") {
					console.log("[Dev-Only] TOTP Code:", code);
					await sendAuthEmail({ email, code, magicLink });
				}
				await sendAuthEmail({ email, code, magicLink });
			},
		},
		async ({ email }) => {
			const user = await prisma.clientfile.findUnique({ where: { email: email } });
			if (!user) return json({ success: false, message: "No user found." });
			return user;
		}
	)
);
