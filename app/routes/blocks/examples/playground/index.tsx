import MonacoEditor from "../editor";
import PlaygroundPage from "./PlaygroundPage";
import codeviewer from './components/code-viewer'
import maxlengthselector from './components/maxlength-selector'
import modelselector from './components/model-selector'
import presetactions from './components/preset-actions'
import presetsave from './components/preset-save'
import presetselector from './components/preset-selector'
import presetshare from './components/preset-share'
import temperatureselector from './components/temperature-selector'
import toppselector from './components/top-p-selector'
import models from './data/models'
import presets from './data/presets'

export async function loader({ request }: LoaderArgs) {
  return null;
}


export default  function UserAuthForm() {
  const ScaffoldingCode =`
    // components/code-viewer.tsx
    ${codeviewer}
    
// components/maxlength-selector.tsx
${maxlengthselector}

// components/model-selector.tsx
${modelselector}

// components/preset-actions.tsx
${presetactions}

// components/preset-save.tsx
${presetsave}

// components/preset-selector.tsx
${presetselector}

// components/preset-share.tsx
${presetshare}

// components/temperature-selector.tsx
${temperatureselector}

// components/top-p-selector.tsx
${toppselector}

// data/models.ts
${models.ts}

// data/presets.ts
${presets.ts}
`
  return (
    <div className="flex flex-col justify-center gap-4">
      <MonacoEditor code={PlaygroundPage} renderComp={<PlaygroundPage />} />
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
