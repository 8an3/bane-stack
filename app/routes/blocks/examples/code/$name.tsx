import { useLoaderData } from "@remix-run/react";
import { customSections, ecommercSsections, pageComponents, sections, uiComponents } from "~/components/sections/sections";
import { useEffect, useState } from "react"; 
import { useEffect, useRef, useState } from "react";
import { DisplayFunctionAndCode } from "~/components/sections/displayFunctionAndCode";

export default function CodeViewer() {
	const { example } = useLoaderData();
	const filteredExample = combinedSections?.find((e) => e.value === example);
	const [code, setCode] = useState();
	const title = filteredExample.name;
	const func = filteredExample.func;
	const desc = filteredExample.desc || null;
	console.log(title, filteredExample, "ftlerd");
	useEffect(() => {
		async function InitialLoad() {
			const response = await fetch(filteredExample.path);
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const codeContent = await response.text();
			setCode(codeContent);
		}
		InitialLoad();
	}, []);

	return (
		<div>
			<DisplayFunctionAndCode title={title} func={func} code={code} desc={desc} />
		</div>
	);
}

export async function loader({ request, params }: LoaderArgs) {
	const example = params.name;

	return { example };
}

const combinedSections = [...sections, ...ecommercSsections, ...uiComponents, ...pageComponents, ...customSections];

export const meta: MetaFunction = () => {
	return [{ title: "8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
