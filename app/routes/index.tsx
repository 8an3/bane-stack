import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node';


export default function Dashboard() {
    return (
        <div className="flex flex-col justify-center gap-3">
        </div>
    )
}


export async function loader({ request }: LoaderArgs) {
  return redirect('/portal/dashboard') 
}

export const meta: MetaFunction = () => {
    return [
        { title: "Dashboard - Bane" },
        { name: "description", content: "" },
    ];
}