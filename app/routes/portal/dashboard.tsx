import { React, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from '@remix-run/react';
import { eP } from '~/utils/ext';
import { authSessionStorage } from "~/modules/auth/auth_session";
import { axios } from 'axios';
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node';
import { prisma } from "~/modules/libs";
import { AlertCircle, CarFront, Link } from 'lucide-react';
import { ButtonStyled } from '~/components/ui/button-loading';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import { LoadErrorPage, LoadingPage } from '~/components/shared';



export default function Dashboard() {
	const { user } = useLoaderData()
	const [isLoading, setIsLoading] = useState(true);
	const [loadError, setLoadError] = useState(null);



	const nav = useNavigate()
	if (isLoading) { return (<LoadingPage />); }
	if (loadError) { return (<LoadErrorPage />); }
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
};