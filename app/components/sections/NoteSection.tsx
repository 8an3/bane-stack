import { Info } from "lucide-react";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Label, Separator, Switch } from "~/components";


export const NoteSection = ({ items, className = "", icon = null, title = "NOTE" }) => (
    <div className='flex justify-center'>
        <Card className={`w-[75%]  rounded-none ${className}`}>
            <div className='flex items-center gap-1 mt-3 ml-[35px] mb-3' >
                <div className="flex-shrink-0">
                    {!icon ? <Info /> : icon}
                </div>
                <h4 className="text-sm font-medium text-foreground ">{title}</h4>
            </div>
            <CardContent>
                <div className="grid gap-3 items-start">
                    {items.map((item, index) => (
                        <div key={index} className="ml-3">
                            <p className="text-sm text-foreground mt-1">{item}</p>
                        </div>
                    ))}

                </div>
            </CardContent>
        </Card>
    </div>
);