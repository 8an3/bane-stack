import DataTableColumnHeader from "./components/data-table-column-header";
import DataTableFacetedFilter from "./components/data-table-faceted-filter";
import DataTablePagination from "./components/data-table-pagination";
import DataTableRowActions from "./components/data-table-row-actions";
import DataTableToolbar from "./components/data-table-toolbar";
import DataTableViewOptions from "./components/data-table-view-options";
import MonacoEditor from "../editor";
import TaskPage from "./TaskPage";
import columns from "./components/columns";
import DataTable from "./components/data-table";
import UserNav from "./components/user-nav";

export async function loader({ request }: LoaderArgs) {
	return null;
}

export default function UserAuthForm() {
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={TaskPage} renderComp={<TaskPage />} />
			<MonacoEditor code={UserNav} renderComp={<Scaffolding title="UserNav" />} />
			<MonacoEditor code={DataTable} renderComp={<Scaffolding title="DataTable" />} />
			<MonacoEditor code={DataTableColumnHeader} renderComp={<Scaffolding title="DataTableColumnHeader" />} />
			<MonacoEditor code={columns} renderComp={<Scaffolding title="columns" />} />
			<MonacoEditor code={DataTableFacetedFilter} renderComp={<Scaffolding title="DataTableFacetedFilter" />} />
			<MonacoEditor code={DataTableViewOptions} renderComp={<Scaffolding title="DataTableViewOptions" />} />
			<MonacoEditor code={DataTableToolbar} renderComp={<Scaffolding title="DataTableToolbar" />} />
			<MonacoEditor code={DataTableRowActions} renderComp={<Scaffolding title="DataTableRowActions" />} />
			<MonacoEditor code={DataTablePagination} renderComp={<Scaffolding title="DataTablePagination" />} />
		</div>
	);
}

export function Scaffolding({ title }) {
	return (
		<div className="bg-background rounded-[15px] m-[15px] overflow-hidden h-[calc(100vh-54px)] flex flex-col w-full justify-center items-center">
			<div className="flex  py-[100px]  ">
				<PageHeader>
					<PageHeaderHeading className="max-w-4xl">Scaffolding - {title} </PageHeaderHeading>
					<PageHeaderDescription>The remaining code in order to make it work.</PageHeaderDescription>
				</PageHeader>
			</div>
		</div>
	);
}

export const meta: MetaFunction = () => {
	return [{ title: "Tasks - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
