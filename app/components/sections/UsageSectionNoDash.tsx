

export const UsageSectionNoDash = ({ title, items, className = "" }) => (
    <div className={`w-[100%] mx-auto ${className}`}>
        <h3 className="text-xl font-medium mb-4 text-foreground ">{title}</h3>
        <ul className="text-muted-foreground space-y-1 text-sm">
            {items.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);