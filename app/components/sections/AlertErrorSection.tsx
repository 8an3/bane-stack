import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';




export function AlertErrorSection({
  title = "There were 2 errors with your submission",
  desc = [
    "Your password must be at least 8 characters",
    "Your password must include at least one pro wrestling finishing move"
  ]
}) {
  return (
    <div className={`bg-red-900/40 border border-red-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircle className="h-5 w-5 text-red-300" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-600">{title}</h3>
          <div className="mt-2 text-sm text-red-500">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
