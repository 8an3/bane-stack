import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { Check, ChevronLeft, Code, Copy, Download, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ExportFile } from "~/components/customUi/exportFile";
import { LoadingPage } from "~/components/customUi/loadingPage";
import { useNavigate } from "@remix-run/react";

export function DisplayFunctionAndCode({ title = null, func = null, code = null, desc = null }) {
    const timerRef = useRef(0);
    const [activeTab, setActiveTab] = useState("code");
    const [copiedText, setCopiedText] = useState();
    const [loading, setLoading] = useState(true);
const nav = useNavigate()
    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(text);
            setTimeout(() => setCopiedText(""), 3000);
        });
    };

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    useEffect(() => {
        if (title && code) {
            setLoading(false);
        }
    }, [title, code]);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="border border-border bg-background/70 grid rounded-[5px] w-full md:min-w-[500px]">
            <div className="flex justify-between items-center gap-3 p-3">
                <div className="flex items-center gap-3">
                    <Code />
                    <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
                    {title}
                </div>

                {/* Tab Navigation */}<div className='flex items-center gap-3' >

                             <Button 
                    variant='ghost'
                    size='icon'
                    onClick={() => {
                        nav(-1)
                    }}>
                        <ChevronLeft />
                    </Button>
                <div className="flex items-center rounded-md border border-border">
           
                        <button
                        className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-l-md border-l border-border ${activeTab === "code" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`}
                        onClick={() => setActiveTab("code")}
                    >
                        Code
                    </button>
                    <button
                        className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-r-md  ${activeTab === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`}
                        onClick={() => setActiveTab("preview")}
                    >
                        Preview
                    </button>
                
                </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button size="sm" variant="ghost" className="text-muted-foreground" onClick={() => copyText(code)}>
                        {copiedText === code ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy />}
                    </Button>
                    <ExportFile code={code} filename={`${title}.tsx`} />
                </div>
            </div>

            {/* Tab Content */}
            <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                {activeTab === "code" ? (
                    <pre className="p-4 text-sm text-left overflow-x-auto">
                        <code className="text-foreground">{code}</code>
                    </pre>
                    
                ) : (
                    <div className="p-4 flex items-center justify-center min-h-[100px]">{func}</div>
                )}
            </div>

            {desc && (
                <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                    <div className="flex items-center gap-1 mt-3 ml-[35px] mb-3">
                        <div className="flex-shrink-0">
                            <Info />
                        </div>
                        <p className="text-sm text-foreground mt-1">{desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export function DemoTemplate() {
	return <p>This is a demo function.</p>;
}
