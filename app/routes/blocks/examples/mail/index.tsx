import MonacoEditor from "../editor";
import { Mail } from "./components/mail";
import mail from "./components/mail";
import accountswitcher from "./components/account-switcher";
import maildisplay from "./components/mail-display";
import maillist from "./components/mail-list";
import nav from "./components/nav";
import { accounts, mails } from "./data";
import Sidebar9 from "~/components/blocks/sidebars/sidebar-09";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import menu from './components/menu.tsx'


export default function MailPage() {
	const layout = null;
	const collapsed = null;

	const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
	const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;
  const ScaffoldingCode =`
  // components/account-switcher.tsx
  ${accountswitcher}
  
  // components/mail-display.tsx
    ${maildisplay}

  // components/mail-list.tsx
    ${maillist}

  // components/mail.tsx
    ${mail}

  // data/nav.tsx
    ${nav}
`
	return (
		<>
			<div className="flex-col md:flex mt-5">
				<Tabs defaultValue="Mail 01">
					<TabsList>
						<TabsTrigger value="Mail 01">Mail 01</TabsTrigger>
						<TabsTrigger value="Mail 02">Mail 02</TabsTrigger>
					</TabsList>
					<TabsContent value="Mail 01">
						<div className="flex flex-col justify-center gap-4">
							<MonacoEditor code={Mail} renderComp={<Mail accounts={accounts} mails={mails} defaultLayout={defaultLayout} defaultCollapsed={defaultCollapsed} navCollapsedSize={4} />} />
              	<MonacoEditor code={ScaffoldingCode} renderComp={<Scaffolding />} />
						</div>
					</TabsContent>
					<TabsContent value="Mail 02">
						<div className="flex flex-col justify-center gap-4">
							<MonacoEditor code={Sidebar9} renderComp={<Sidebar9 />} />
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</>
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

export const meta: MetaFunction = () => {
	return [{ title: "Mail - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
export async function loader({ request }: LoaderArgs) {
	return null;
}
