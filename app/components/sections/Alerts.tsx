import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';
import { AlertSuccessSectionWithDismissalButton } from './AlertSuccessSectionWithDismissalButton';
import { AlertAttentionSectionWithAccent } from './AlertAttentionSectionWithAccent';
import { AlertInfoSection } from './AlertInfoSection';
import { AlertErrorSection } from './AlertErrorSection';
import { AlertSuccessSection } from './AlertSuccessSection';

const bg = 900
const opacity = 40
const border = 600

export function AlertAttentionSection({
  title = "Attention needed",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
}) {
  return (
    <div className={`bg-yellow-900/40 border border-yellow-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-300" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-600">{title}</h3>
          <div className="mt-2 text-sm text-yellow-500">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export  function AlertNotificationDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground mb-8">Notification Components</h1>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Attention Section</h2>
        <AlertAttentionSection />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Error Section</h2>
        <AlertErrorSection />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Success Section</h2>
        <AlertSuccessSection actionBtn1="View status" actionBtn2="Dismiss" />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Info Section</h2>
        <AlertInfoSection />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Attention with Accent</h2>
        <AlertAttentionSectionWithAccent />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Success with Dismissal</h2>
        <AlertSuccessSectionWithDismissalButton onDismiss={() => alert('Dismissed!')} />
      </div>
    </div>
  )
}