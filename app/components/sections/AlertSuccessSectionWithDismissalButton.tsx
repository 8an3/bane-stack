import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';




export function AlertSuccessSectionWithDismissalButton({
  title = "Successfully uploaded",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  onDismiss = () => {}
}) {
  return (
    <div className={`bg-green-900/40 border border-green-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-600">{title}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex rounded-md  p-1.5  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50  bg-green-900/40 text-green-600 hover:bg-green-700/40 cursor-pointer"
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}