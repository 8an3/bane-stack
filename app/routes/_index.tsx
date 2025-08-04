import { Textarea } from '~/components/ui/textarea';
import { React, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from '@remix-run/react';
import { authSessionStorage } from "~/modules/auth/auth_session";
import { axios } from 'axios';
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node';
import { prisma } from "~/modules/libs/prisma";
import { CarFront, Link } from 'lucide-react';
import { ButtonStyled } from '~/components/ui/button-loading';
import { Label } from '~/components/ui/label';



export default function Dashboard() {
    const { user } = useLoaderData()
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);


    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <div className="text-lg font-medium text-gray-700">Loading configuration...</div>
                    <div className="text-sm text-gray-500 mt-2">Fetching build settings from server</div>
                </div>
            </div>
        );
    }
    if (loadError) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center max-w-md">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <div className="text-lg font-medium text-foreground mb-2">Failed to Load Configuration</div>
                    <div className="text-sm text-muted-foreground mb-4">{loadError}</div>
                    <Button
                        onClick={() => nav(0)}
                        className="px-4 py-2 bg-primary hover:bg-primary/20 text-foreground rounded-lg transition-colors"
                    >
                        Retry
                    </Button>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col justify-center gap-3">

        </div>
    )
}

export async function action({ request }: ActionArgs) {
    const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
    const email = session.get("email");
    const user = await eP.user.simple(email)
    if (!user) { return redirect(process.env.LOGIN); }

    const d = Object.fromEntries(await request.formData());
    const intent = d.intent

    try {
        if (intent === 'createFunction') {
            const result = await prisma.Function.create({
                data: {
                    ...data
                }
            });
            return json({ success: true, result });
        } else if (intent === 'updateFunction') {
            const result = await prisma.Function.update({
                where: { id: String(id) },
                data
            });
            return json({ success: true, result });
        } else if (intent === 'deleteFunction') {
            const result = await prisma.Function.delete({
                where: { id: String(id) },

            });
            return json({ success: true, result });
        } else {
            return json({ success: false, error: "Invalid intent" }, { status: 400 });
        }

    } catch (error) {
        return json({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}

export async function loader({ request }: LoaderArgs) {
    const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
    const email = session.get("email");
    const user = await eP.user.all(email)
    if (!user) { return redirect(import.meta.env.VITE_LOGIN); }

    return json({ user })
}

export const meta: MetaFunction = () => {
    return [
        { title: "Dashboard - Catalyst" },
        { name: "description", content: "Catalyst software dashboard." },
    ];
}