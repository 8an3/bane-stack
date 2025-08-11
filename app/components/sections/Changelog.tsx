


export const Changelog = ({ version, fixed = null, changed = null, added = null, issue = null, deleted = null,className }) => (
    <div className={`w-[100%] mx-auto ${className}`}>
        <h3 className="text-xl font-medium mb-4 text-foreground ">{version}</h3>
        {added && (
            <>
                <p>Added</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {added.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {fixed && (
            <>
                <p>Fixed</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {fixed.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {deleted && (
            <>
                <p>Removed</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {deleted.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {changed && (
            <>
                <p>Changed</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {changed.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {issue && (
            <>
                <p>Issue</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {issue.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </div>
);