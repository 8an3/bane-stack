
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { authenticator } from "~/modules/auth/auth";
import { authSessionStorage } from "~/modules/auth/auth_session";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/components/ui/utils";
import { Zap } from "lucide-react";
import { ButtonStyled } from "~/components/customUi/ButtonStyled";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
  const email = session.get("email");
  console.log(email, 'email')
  if (email) { return redirect("/CatalystUI/home"); }
  return json({ email });
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
    const user = await authenticator.authenticate("user-pass", request, {
      failureRedirect: "/login",
      throwOnError: true,
    });
    
    console.log(user,'user')
    session.set('email', user.email)
    session.set('id', user.id)
    
    return json(
      { success: "Login succeeded!", user }, 
      { 
        headers: { 
          "Set-Cookie": await authSessionStorage.commitSession(session) 
        } 
      }
    );
  } catch (error) {
    return json(
      { error: error instanceof Error ? error.message : "Login failed" },
      { status: 400 }
    );
  }
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6")}>
          <Form method="post">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="/"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <Zap className='text-primary' />
                  </div>
                  <span className="sr-only">POS.</span>
                </a>
                <h1 className="text-xl font-bold">Welcome to Catalyst POS</h1>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="/signup" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                {actionData?.error && (
                  <div className="text-sm text-red-500">{actionData.error}</div>
                )}
                {actionData?.success && (
                  <div className="text-sm text-green-500">{actionData.success}</div>
                )}
                <ButtonStyled type="submit" >
                  Login
                </ButtonStyled>
              </div>
            
            </div>
          </Form>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}