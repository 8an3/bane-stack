import MonacoEditor from "../editor";
import MusicPage from "./MusicPage";
import albumartwork from './components/album-artwork.tsx'
import menu from './components/menu.tsx'
import podcastemptyplaceholder from './components/podcast-empty-placeholder.tsx'
import sidebar from './components/sidebar.tsx'
import album from './data/albums.ts'
import playlists from './data/playlists.ts'

export async function loader({ request }: LoaderArgs) {
	return null;
}

export default  function UserAuthForm() {
  const ScaffoldingCode =`
  // components/album-artwork.tsx
  ${albumartwork}

  // components/menu.tsx
    ${menu}

  // components/podcast-empty-placeholder.tsx
    ${podcastemptyplaceholder}

  // components/sidebar.tsx
    ${sidebar}

  // data/album.ts
    ${album}

  // data/playlists.ts
    ${playlists}`
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={MusicPage} renderComp={<MusicPage />} />
			<MonacoEditor code={ScaffoldingCode} renderComp={<Scaffolding />} />
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
