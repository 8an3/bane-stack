import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';


export function AlertSuccessSection({
  title = "Order completed",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  actionBtn1 = null,
  actionBtn2 = null
}) {
  return (
    <div className={`bg-green-900/40 border border-green-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-600">{title}</h3>
          <div className="mt-2 text-sm text-green-500">
            <p>{desc}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              {actionBtn1 && (
                <button
                  type="button"
                  className="rounded-md bg-green-900/40 px-2 py-1.5 text-sm font-medium text-green-600 hover:bg-green-700/40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 cursor-pointer"
                >
                  {actionBtn1}
                </button>
              )}
              {actionBtn2 && (
                <button
                  type="button"
                  className="ml-3 rounded-md bg-green-900/40 px-2 py-1.5 text-sm font-medium text-green-600 hover:bg-green-700/40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 cursor-pointer"
                >
                  {actionBtn2}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}