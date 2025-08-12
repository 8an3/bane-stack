import ProductsPage from "~/components/blocks/products/products-01/page";
import MonacoEditor from "../editor";
import productstable from '~/components/blocks/products/products-01/components/products-table'


export const meta: MetaFunction = () => {
	return [
		{ title: "Products - 8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};

export async function loader({ request }: LoaderArgs) {
  return null
}


export default  function UserAuthForm() {

  return (
    <div className="flex flex-col justify-center gap-4">
      <MonacoEditor code={ProductsPage} renderComp={<ProductsPage />} />
      <MonacoEditor code={productstable} renderComp={<Scaffolding />} />
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
