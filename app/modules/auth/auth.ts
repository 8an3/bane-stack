import type { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { authSessionStorage } from "./auth_session";
import { FormStrategy } from "remix-auth-form";
import { prisma } from "~/modules/libs/prisma";
import bcrypt from "bcryptjs";
import { json } from "@remix-run/node";

export const authenticator = new Authenticator<User>(authSessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!email || !password) { return json({ error: "Email and password are required" }) }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) { return json({ error: "No user with this email exists" }) }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) { return json({ error: "Invalid email or password" }) }

    return user;
  }),
  "user-pass"
);