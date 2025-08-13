import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';



export function AlertAttentionSectionWithAccent({
  title = "Attention needed",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  linkText = "Upgrade your account to add more credits.",
  link = "#"
}) {
  return (
    <div className={`bg-yellow-900/40 border-l-4 border-yellow-400 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-600">
            You have no credits left.{' '}
            <a href={link} className="font-medium underline text-yellow-500 hover:text-yellow-600">
              {linkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}