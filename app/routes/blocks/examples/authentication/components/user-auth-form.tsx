import OTPLogin from "~/components/auth/otp/login";
import OTPSignUp from "~/components/auth/otp/signup";
import OTPVerify from "~/components/auth/otp/verify";
import MonacoEditor from "../../editor";
import { PageHeader, PageHeaderDescription, PageHeaderFunction, PageHeaderHeading } from "~/components/customUi/page-header";

export function UserAuthForm() {
	const compCode = {
		OTPLogin: `import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
    import { Link, useSubmit, useNavigate, useLoaderData, useNavigation, Form, NavLink, useFetcher } from "@remix-run/react";
    import { json, redirect } from "@remix-run/node";
    import { authenticator } from "~/modules/otp/client-auth";
    import { getSession, commitSession, sessionStorage } from "~/modules/otp/auth-session";
    import { Input } from "~/components/ui/input";
    import { Label } from "~/components/ui";
    import { OptiInput } from "~/components/shared/shared";
    import { CarFront, GalleryVerticalEnd, Zap } from "lucide-react";
    import { prisma } from "~/modules/libs/prisma";
    import { cn } from "~/components/ui/utils";
    import { redirectSessionStorage } from "~/modules/otp/auth-session";
    import { ButtonStyled } from "~/components/customUi/ButtonStyled";
    
    export async function loader({ request }: LoaderFunctionArgs) {
      const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
      let redirectTo = redirectCookie.get("redirectTo");
      redirectTo = redirectTo ? redirectTo : "/client/portal/dashboard";
      await authenticator.isAuthenticated(request, { successRedirect: redirectTo });
    
      const session = await sessionStorage.getSession(request.headers.get("Cookie"));
      const user = session.get("user");
      const authEmail = session.get("auth:email");
      const authError = session.get(authenticator.sessionErrorKey);
      if (user) return redirect(redirectTo);
      const d = await prisma.dealer.findUnique({
        where: { id: 1 },
        select: {
          dealerName: true,
          metaDesc: true,
        },
      });
      return json({ d, redirectTo, authError, authEmail } as const, {
        headers: {
          "set-cookie": await sessionStorage.commitSession(session),
        },
      });
    }
    
    export async function action({ request }: ActionFunctionArgs) {
      await authenticator.authenticate("TOTP", request, {
        successRedirect: "/client/auth/verify",
        failureRedirect: "/client/auth/login",
      });
    }
    
    export const meta: MetaFunction = () => {
      return [{ title: "8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
    };
    
    export default function OTPLogin() {
      const { authError } = useLoaderData<typeof loader>();
    
      const fetcher = useFetcher();
      return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
          <div className="w-full max-w-sm">
            <div className={cn("flex flex-col gap-6")}>
              <Form method="post">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <NavLink to="/dealer/home" className="flex flex-col items-center gap-2 font-medium">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md">
                        <Zap className="size-6  text-primary" />
                      </div>
                      <span className="sr-only">Catalyst Software</span>
                    </NavLink>
                    <h1 className="text-xl font-bold">Catalyst Software</h1>
                    <div className="text-center text-sm">OTP Login</div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2 mx-auto w-[95%]">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" placeholder="johnwick@thecontinental.com" className="rounded-none" required />
                    </div>
                    <ButtonStyled loadingText="Logging in...">Login</ButtonStyled>
                    {authError && <span className="font-semibold text-red-400">{authError?.message}</span>}
                    {fetcher.data && fetcher.data.success === false && <span className="font-semibold text-red-400">{fetcher?.data?.message}</span>}
                  </div>
                </div>
              </Form>
              <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary space-x-2">
                <span>No account?</span>
                <NavLink to="client/auth/signup">Sign Up</NavLink>
              </div>
              <p className="text-center text-xs leading-relaxed text-gray-400">
                By continuing, you agree to our <span className="clickable underline">Terms of Service</span>
              </p>
            </div>
          </div>
        </div>
      );
    }
    `,
		OTPSignUp: `import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
    import { Link, useSubmit, useNavigate, useLoaderData, useNavigation, Form, NavLink } from "@remix-run/react";
    import { json } from "@remix-run/node";
    import { authenticator } from "~/modules/otp/client-auth";
    import { getSession, commitSession } from "~/modules/otp/auth-session";
    import { Input } from "~/components/ui/input";
    import { ButtonLoading, Label } from "~/components/ui";
    import { GalleryVerticalEnd, Zap } from "lucide-react";
    import { prisma } from "~/modules/libs/prisma";
    import { cn } from "~/components/ui/utils";
    import { redirectSessionStorage } from "~/modules/otp/auth-session";
    import { ButtonStyled } from "~/components/customUi/ButtonStyled";
    
    export async function loader({ request }: LoaderFunctionArgs) {
      const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
      const redirectTo = redirectCookie.get("redirectTo") || "/client/portal/dashboard";
      await authenticator.isAuthenticated(request, { successRedirect: redirectTo });
    
      const cookie = await getSession(request.headers.get("cookie"));
      const authEmail = cookie.get("auth:email");
      const authError = cookie.get(authenticator.sessionErrorKey);
      const d = await prisma.dealer.findUnique({
        where: { id: 1 },
        select: {
          dealerName: true,
          metaDesc: true,
        },
      });
      // Commit session to clear any  error message.
      return json({ authEmail, authError, d } as const, {
        headers: {
          "set-cookie": await commitSession(cookie),
        },
      });
    }
    export async function action({ request }: ActionFunctionArgs) {
      const url = new URL(request.url);
      const currentPath = url.pathname;
    
      await authenticator.authenticate("TOTP", request, {
        // The successRedirect route will be used to verify the OTP code.
        // This could be the current pathname or any other route that renders the verification form.
        successRedirect: "/client/auth/verify",
    
        // The failureRedirect route will be used to render any possible error.
        // This could be the current pathname or any other route that renders the login form.
        failureRedirect: currentPath,
      });
    }
    
    export const meta: MetaFunction = () => {
      return [{ title: "8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
    };
    
    export default function OTPSignUp() {
      return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
          <div className="w-full max-w-sm">
            <div className={cn("flex flex-col gap-6")}>
              <Form method="post" autoComplete="off">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <NavLink to="/dealer/home" className="flex flex-col items-center gap-2 font-medium">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md">
                        <Zap className="size-6  text-primary" />
                      </div>
                      <span className="sr-only">Catalyst Software</span>
                    </NavLink>
                    <h1 className="text-xl font-bold">Catalyst Software</h1>
                    <div className="text-center text-sm">OTP Sign Up</div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2 mx-auto w-[95%]">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" className="rounded-none " required />
                    </div>
    
                    <ButtonStyled loadingText="Signing up...">Sign Up</ButtonStyled>
                  </div>
                </div>
              </Form>
              <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">No account? Once your a client you account will already be set up for you.</div>
              <p className="text-center text-xs leading-relaxed text-gray-400">
                By continuing, you agree to our <span className="clickable underline">Terms of Service</span>
              </p>
            </div>
          </div>
        </div>
      );
    }
    `,
		OTPVerify: `import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
    import { Form, NavLink, useLoaderData, useNavigation } from "@remix-run/react";
    import { json, redirect } from "@remix-run/node";
    import { authenticator } from "~/modules/otp/client-auth";
    import { Card, Separator, Input, Label, CardHeader, CardTitle, CardDescription, CardContent, ButtonLoading, ButtonStyled } from "~/components/ui";
    import { redirectSessionStorage, getSession, commitSession } from "~/modules/otp/auth-session";
    import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "~/components/ui/input-otp";
    import { cn } from "~/components/ui/utils";
    import { CarFront, Zap } from "lucide-react";
    import { prisma } from "~/modules/libs/prisma";
    
    export async function loader({ request }: LoaderFunctionArgs) {
      await authenticator.isAuthenticated(request, {
        successRedirect: "/dealer/home",
      });
    
      const cookie = await getSession(request.headers.get("cookie"));
      const authEmail = cookie.get("auth:email");
      const authError = cookie.get(authenticator.sessionErrorKey);
    
      if (!authEmail) return redirect("/client/auth/login");
      const d = await prisma.dealer.findUnique({
        where: { id: 1 },
        select: {
          dealerName: true,
          metaDesc: true,
        },
      });
      // Commit session to clear any error message.
      return json({ authEmail, authError, d } as const, {
        headers: {
          "set-cookie": await commitSession(cookie),
        },
      });
    }
    
    export async function action({ request }: ActionFunctionArgs) {
      const url = new URL(request.url);
      let currentPath = url.pathname;
    
      const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
      const cookieUrl = redirectCookie.get("redirectTo");
    
      if (cookieUrl) {
        currentPath = cookieUrl;
      }
      try {
        return await authenticator.authenticate("TOTP", request, {
          successRedirect: currentPath,
          failureRedirect: currentPath,
        });
      } finally {
        await redirectSessionStorage.destroySession(redirectCookie);
      }
    }
    
    export default function OTPVerify() {
      const { authEmail, authError, d } = useLoaderData<typeof loader>();
      return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
          <div className="w-full max-w-sm">
            <div className={cn("flex flex-col gap-6")}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                  <NavLink to="/dealer/home" className="flex flex-col items-center gap-2 font-medium">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md">
                      <Zap className="size-6 text-primary" />
                    </div>
                    <span className="sr-only">Catalyst Software</span>
                  </NavLink>
                  <h1 className="text-xl font-bold">Catalyst Software</h1>
                  <div className="text-center text-sm">Verify OTP</div>
                  <p className="text-muted-foreground">Please check your inbox.</p>
                  <p className="text-muted-foreground">We've sent you a OTP link email.</p>
                </div>
    
                <div className="grid gap-4">
                 	<Form method="post" autoComplete="off" className="flex w-full flex-col gap-4  justify-center">
								<div className="grid w-full  justify-center gap-1.5">
									<Label htmlFor="code" className="sr-only">
										Code
									</Label>
									<InputOTP maxLength={6} name="code" className="mx-auto mb-3">
										<InputOTPGroup>
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
										</InputOTPGroup>
										<InputOTPSeparator />
										<InputOTPGroup>
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</div>
								{/**   <Input
													type="text"
													name="code"
													placeholder="Enter code..."
													required
													className=" w-full text-foreground bg-background border border-border mb-3"
													/>  */}
								<ButtonStyled loadingText="Verfiying code...">
									<p className="">Verify Code</p>
								</ButtonStyled>
							</Form>
							<Form method="POST" autoComplete="off" className="flex w-full flex-col gap-2">
								<ButtonStyled loadingText="Requesting new code..." primary={false}>
									<span className="text-sm  ">Request New Code</span>
								</ButtonStyled>
							</Form>
                  {/* Errors Handling. */}
                  {authEmail && authError && <span className="font-semibold text-red-400">{authError?.message}</span>}
                </div>
              </div>
              <p className="text-center text-xs leading-relaxed text-gray-400">
                By continuing, you agree to our <span className="clickable underline">Terms of Service</span>
              </p>
            </div>
          </div>
        </div>
      );
    }`,
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
