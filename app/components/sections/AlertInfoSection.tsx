import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';


export function AlertInfoSection({
  title = "A new software update is available. See what's new in version 2.0.4.",
  link = "#",
  linkText = "View update"
}) {
  return (
    <div className={`bg-blue-900/40 border border-blue-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-600">{title}</p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <a href={link} className="whitespace-nowrap font-medium text-blue-500 hover:text-blue-600">
              {linkText}
              <span aria-hidden="true"> →</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
