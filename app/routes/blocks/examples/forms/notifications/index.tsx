import MonacoEditor from "../../editor";
import { NotificationsForm } from "./notifications-form"

export default  function UserAuthForm() {
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={NotificationsForm} renderComp={<NotificationsForm />} />
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
