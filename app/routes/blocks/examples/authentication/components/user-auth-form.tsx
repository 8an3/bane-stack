import OTPLogin from "~/components/auth/otp/login";
import OTPSignUp from "~/components/auth/otp/signup";
import OTPVerify from "~/components/auth/otp/verify";
import MonacoEditor from "../../editor";
import { PageHeader, PageHeaderDescription, PageHeaderFunction, PageHeaderHeading } from "~/components/customUi/page-header";

export function UserAuthForm() {
	const compCode = {
		OTPLogin: OTPLogin,
		OTPSignUp: OTPSignUp,
		OTPVerify: OTPVerify,
		Scaffolding: `
    // modules/otp/auth-session.ts
    import { createCookieSessionStorage } from "@remix-run/node";
    
    export type { User } from "@prisma/client";
    
    export const authSessionStorage = createCookieSessionStorage({
      cookie: {
        name: "__auth-session",
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secrets: ["s3cr3tqwe45"],
        secure: process.env.NODE_ENV === "production",
      },
    });

// modules/otp/client-auth.tsx
import { Authenticator } from "remix-auth";
import { TOTPStrategy } from "remix-auth-totp";
import { prisma } from "~/modules/libs/prisma";
import type { Clientfile } from "@prisma/client";
import { authSessionStorage } from "~/modules/otp/auth-session";
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

// modules/otp/email.tsx
import { z } from "zod";
import { Resend } from "resend";

const ResendErrorSchema = z.union([
  z.object({
    name: z.string(),
    message: z.string(),
    statusCode: z.number(),
  }),
  z.object({
    name: z.literal("UnknownError"),
    message: z.literal("Unknown Error"),
    statusCode: z.literal(500),
    cause: z.any(),
  }),
]);
const ResendSuccessSchema = z.object({
  id: z.string(),
});

export type SendEmailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
};

export async function sendEmail(options: SendEmailOptions) {
  const from = "onboarding@resend.dev";
  const email = { from, ...options };
// the bearer in authorizaion needs to be switch to back ticks, also need to remove the space between the $ and the curly brace
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: 'Bearer $ {import.meta.env.VITE_RESEND_API_KEY}',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = await response.json();
  const parsedData = ResendSuccessSchema.safeParse(data);

  if (response.ok && parsedData.success) {
    return { status: "success", data: parsedData } as const;
  } else {
    const parseResult = ResendErrorSchema.safeParse(data);
    if (parseResult.success) {
      console.error(parseResult.data);
      throw new Error("Unable to send email.");
    } else {
      console.error(data);
      throw new Error("Unable to send email.");
    }
  }
}

export const sendAuthEmail = async ({ email, code, magicLink }: { email: string; code: string; magicLink: string }) => {
  const subject = "Your verification code for Remix Auth TOTP";
  const html = 'The email you will need to grab it from the code, as I couldn't find a way to include here while sanitizing it while at the same time being able to just copy and paste into your project... or code it yourself. But instead of being a dick and making you dig for it, https://github.com/8an3/bane-stack/blob/main/app/modules/otp/email.tsx';

  await sendEmail({
    to: email,
    subject,
    html,
  });
};

// while the next two do not actually display anything to the screen, they still need to be a route, so be sure to not just copy it to your components folder as it will not work
// routes/__auth/magic-link./tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";
import { redirectSessionStorage } from "~/modules/otp/auth-session";

export async function loader({ request }: LoaderFunctionArgs) {
  const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
  const redirectTo = redirectCookie.get("redirectTo") || "/client/portal/dashboard";
  await authenticator.authenticate("TOTP", request, {
    successRedirect: redirectTo,
    failureRedirect: "/client/auth/login",
  });
}

// routes/__auth/logout./tsx
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: "/client/auth/login" });
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: "/client/auth/login" });
}

export const meta: MetaFunction = () => {
  return [
    { title: "8an3/Bane" },
    { name: "description", content: "8an3/Bane Remix Stack" },
  ];
};
    `,
	};
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={compCode.OTPLogin} renderComp={<OTPLogin />} />
			<MonacoEditor code={compCode.OTPSignUp} renderComp={<OTPSignUp />} />
			<MonacoEditor code={compCode.OTPVerify} renderComp={<OTPVerify />} />
			<MonacoEditor code={compCode.Scaffolding} renderComp={<Scaffolding />} />
		</div>
	);
}

export function Scaffolding() {
	return (
		<div className="bg-background rounded-[15px] m-[15px] overflow-hidden h-[calc(100vh-54px)] flex flex-col w-full justify-center items-center">
			<div className="flex  py-[100px]  ">
				<PageHeader>
					<PageHeaderHeading className="max-w-4xl">Scaffolding</PageHeaderHeading>
					<PageHeaderDescription>The remaining code in order to make it work.</PageHeaderDescription>
				</PageHeader>
			</div>
		</div>
	);
}
