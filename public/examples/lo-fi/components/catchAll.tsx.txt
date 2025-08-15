import { Atom } from "~/components/lo-fi/atom";
import {
	ChevronDown,
	ChevronUp,
	MoreHorizontal,
	Smartphone,
	 Monitor, Droplets,
	Code,
	Megaphone,
	X,
	Home,
	Settings,
	Users,
	FileText,
	ChevronRight,
	Loader2,
	Cookie,
	Shield,
	BarChart3,
	Target,
	CreditCard,
	CheckCircle,
	AlertTriangle,
	Columns2,
	Database,
	FileText,
	Bell,
	Palette,
	User,
} from "lucide-react";

export function ClientOnlyLoFi() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90px] gap-1">
      {/* Loading spinner with client icon */}
      <div className="flex items-center gap-2">
        <Monitor className="size-3 text-primary/60" />
        <Loader2 className="size-5 animate-spin text-primary" />
      </div>
      
      {/* Loading skeleton content */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {/* Header skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
          <div className="flex flex-col gap-1 flex-1">
            <Atom shade="200" className="h-3 w-3/4 animate-pulse" />
            <Atom shade="100" className="h-2 w-1/2 animate-pulse" />
          </div>
        </div>
        
      
      </div>
    </div>
  );
}
export function UseHydratedLoFi() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90px] gap-1">
      {/* Loading spinner with hydration icon */}
      <div className="flex items-center gap-2">
        <Droplets className="size-3 text-primary/60" />
        <Loader2 className="size-5 animate-spin text-primary" />
      </div>
      
      {/* Loading skeleton content */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {/* Header skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
          <div className="flex flex-col gap-1 flex-1">
            <Atom shade="200" className="h-3 w-3/4 animate-pulse" />
            <Atom shade="100" className="h-2 w-1/2 animate-pulse" />
          </div>
        </div>
        
        {/* Hydration-specific skeleton pattern */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Atom shade="200" className="h-2 w-1/3 animate-pulse" />
            <Atom shade="150" className="h-2 w-1/4 animate-pulse" />
            <Atom shade="100" className="h-2 w-1/5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
export function AccordionLoFi() {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center justify-between border-b p-2">
				<Atom shade="300" className="h-3 w-3/4" />
				<ChevronDown className="size-3" />
			</div>
			<div className="flex items-center justify-between border-b p-2 bg-muted/20">
				<Atom shade="300" className="h-3 w-1/2" />
				<ChevronUp className="size-3" />
				<div className="flex flex-col gap-1 mt-2">
					<Atom shade="200" className="h-2 w-full" />
					<Atom shade="200" className="h-2 w-2/3" />
				</div>
			</div>
		</div>
	);
}
export function PaymentMethodLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			{/* Selected payment method */}
			<div className="flex items-center justify-between p-1 border rounded bg-primary/10 border-primary/40">
				<div className="flex items-center gap-1">
					<CreditCard className="size-3 text-primary" />
					<div className="flex flex-col gap-1">
						<Atom shade="300" className="h-1.5 w-16" />
						<Atom shade="200" className="h-1 w-12" />
					</div>
				</div>
				<CheckCircle className="size-3 text-green-600" />
			</div>

			{/* Other payment method */}
			<div className="flex items-center justify-between p-1 border rounded">
				<div className="flex items-center gap-1">
					<CreditCard className="size-3 text-muted-foreground" />
					<div className="flex flex-col gap-1">
						<Atom shade="200" className="h-1.5 w-14" />
						<Atom shade="100" className="h-1 w-10" />
					</div>
				</div>
				<div className="w-3 h-3 rounded-full border-2 border-muted" />
			</div>
		</div>
	);
}
export function ReportIssueLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<AlertTriangle className="size-3 text-orange-600" />
				<Atom shade="300" className="h-1.5 w-20" />
			</div>
			<div className="flex flex-col gap-1">
				<Atom shade="200" className="h-1.5 w-full" />
				<Atom shade="100" className="h-1 w-3/4" />
				<Atom shade="100" className="h-1 w-1/2" />
			</div>
			<div className="flex gap-1 pt-1 border-t">
				<Atom shade="300" className="h-1.5 w-12 rounded" />
				<Atom shade="200" className="h-1.5 w-10 rounded" />
			</div>
		</div>
	);
}
export function Team2LoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Users className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-16" />
			</div>
			<div className="flex items-center gap-1">
				<div className="w-4 h-4 rounded-full bg-primary/20" />
				<div className="flex flex-col gap-1">
					<Atom shade="200" className="h-1.5 w-20" />
					<Atom shade="100" className="h-1 w-12" />
				</div>
			</div>
			<div className="flex items-center gap-1">
				<div className="w-4 h-4 rounded-full bg-muted" />
				<div className="flex flex-col gap-1">
					<Atom shade="200" className="h-1.5 w-16" />
					<Atom shade="100" className="h-1 w-10" />
				</div>
			</div>
		</div>
	);
}
export function AuthenticatorLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Shield className="size-3 text-green-600" />
				<Atom shade="300" className="h-1.5 w-18" />
			</div>
			<div className="flex items-center justify-center p-2 border rounded bg-muted/20">
				<div className="grid grid-cols-3 gap-1">
					{[...Array(6)].map((_, i) => (
						<div key={i} className="w-2 h-2 bg-primary/60 rounded" />
					))}
				</div>
			</div>
			<Atom shade="200" className="h-1.5 w-full" />
		</div>
	);
}
export function ColumnsLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Columns2 className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-16" />
			</div>
			<div className="flex gap-1">
				<div className="flex-1 border rounded p-1">
					<Atom shade="200" className="h-1.5 w-full mb-1" />
					<Atom shade="100" className="h-1 w-3/4" />
				</div>
				<div className="flex-1 border rounded p-1">
					<Atom shade="200" className="h-1.5 w-full mb-1" />
					<Atom shade="100" className="h-1 w-2/3" />
				</div>
			</div>
		</div>
	);
}
export function DataLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Database className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-12" />
			</div>
			<div className="grid grid-cols-2 gap-1">
				<Atom shade="200" className="h-1.5 w-full" />
				<Atom shade="100" className="h-1.5 w-full" />
				<Atom shade="200" className="h-1.5 w-full" />
				<Atom shade="100" className="h-1.5 w-full" />
			</div>
		</div>
	);
}
export function AccountFormLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<User className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-20" />
			</div>
			<div className="flex flex-col gap-1">
				<Atom shade="200" className="h-1.5 w-full" />
				<Atom shade="100" className="h-1.5 w-3/4" />
				<Atom shade="100" className="h-1.5 w-1/2" />
			</div>
			<Atom shade="300" className="h-1.5 w-16 rounded" />
		</div>
	);
}
export function TemplatePageLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<FileText className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-18" />
			</div>
			<div className="flex flex-col gap-1">
				<Atom shade="200" className="h-1.5 w-full" />
				<Atom shade="100" className="h-1 w-4/5" />
				<Atom shade="100" className="h-1 w-3/4" />
				<Atom shade="100" className="h-1 w-2/3" />
			</div>
		</div>
	);
}
export function NotificationsLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Bell className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-20" />
			</div>
			<div className="flex items-center gap-1 p-1 border rounded bg-primary/5">
				<div className="w-2 h-2 rounded-full bg-primary" />
				<Atom shade="200" className="h-1.5 w-16" />
			</div>
			<div className="flex items-center gap-1 p-1 border rounded">
				<div className="w-2 h-2 rounded-full bg-muted" />
				<Atom shade="100" className="h-1.5 w-14" />
			</div>
		</div>
	);
}
export function EditorLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1 border-b pb-1">
				<Code className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-12" />
			</div>
			<div className="flex flex-col gap-1">
				<Atom shade="200" className="h-1 w-full" />
				<Atom shade="100" className="h-1 w-4/5 ml-2" />
				<Atom shade="100" className="h-1 w-3/4 ml-4" />
				<Atom shade="200" className="h-1 w-full" />
			</div>
		</div>
	);
}
export function PrismaLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Database className="size-3 text-purple-600" />
				<Atom shade="300" className="h-1.5 w-12" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex items-center gap-1">
					<div className="w-1 h-3 bg-purple-600/40 rounded" />
					<Atom shade="200" className="h-1.5 w-16" />
				</div>
				<div className="flex items-center gap-1 ml-2">
					<div className="w-1 h-2 bg-muted rounded" />
					<Atom shade="100" className="h-1 w-12" />
				</div>
			</div>
		</div>
	);
}
export function IconsLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Palette className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-12" />
			</div>
			<div className="grid grid-cols-4 gap-1">
				{[...Array(8)].map((_, i) => (
					<div key={i} className="w-4 h-4 border rounded bg-muted/20" />
				))}
			</div>
		</div>
	);
}
export function TailwindLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Palette className="size-3 text-cyan-600" />
				<Atom shade="300" className="h-1.5 w-16" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex gap-1">
					<div className="w-3 h-1.5 bg-cyan-600/40 rounded" />
					<div className="w-4 h-1.5 bg-blue-600/40 rounded" />
					<div className="w-2 h-1.5 bg-purple-600/40 rounded" />
				</div>
				<Atom shade="200" className="h-1 w-full" />
				<Atom shade="100" className="h-1 w-3/4" />
			</div>
		</div>
	);
}
export function HooksLoFi() {
	return (
		<div className="flex flex-col gap-3">
			{/* Hook function definition */}
			<div className="flex items-center gap-1 p-2 border rounded-md bg-muted/20">
				<Code className="size-3" />
				<Atom shade="300" className="h-2 w-24" />
				<Atom shade="200" className="h-2 w-16" />
			</div>

			{/* Mobile detection logic */}
			<div className="flex items-center gap-2 pl-6">
				<Smartphone className="size-3" />
				<div className="flex flex-col gap-1">
					<Atom shade="200" className="h-1.5 w-32" />
					<Atom shade="100" className="h-1.5 w-20" />
				</div>
			</div>

			{/* Return value */}
			<div className="flex items-center gap-2 pt-2 border-t border-dashed">
				<div className="w-2 h-2 rounded-full bg-green-500/60" />
				<Atom shade="300" className="h-2 w-20" />
				<Atom shade="200" className="h-2 w-12" />
			</div>
		</div>
	);
}
export function AnnouncementLoFi() {
	return (
		<div className="flex items-center gap-3 p-3 border rounded-lg bg-primary/10 border-primary/20">
			{/* Announcement icon */}
			<Megaphone className="size-4 text-primary/70" />

			{/* Announcement content */}
			<div className="flex-1 flex flex-col gap-1">
				<Atom shade="300" className="h-2 w-2/3" />
				<Atom shade="200" className="h-2 w-4/5" />
			</div>

			{/* Dismiss button */}
			<X className="size-3 text-muted-foreground" />
		</div>
	);
}
export function LoadingPageLoFi() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[90px] gap-1">
			{/* Loading spinner */}
			<Loader2 className="size-5 animate-spin text-primary" />

			{/* Loading skeleton content */}
			<div className="flex flex-col gap-3 w-full max-w-md">
				{/* Header skeleton */}
				<div className="flex items-center gap-3">
					<div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
					<div className="flex flex-col gap-1 flex-1">
						<Atom shade="200" className="h-3 w-3/4 animate-pulse" />
						<Atom shade="100" className="h-2 w-1/2 animate-pulse" />
					</div>
				</div>
			</div>
		</div>
	);
}
export function SidebarLoFi() {
	return (
		<div className="flex flex-col w-64 border-r bg-muted/20 p-1 gap-1">
			{/* Logo/Brand area */}
			<div className="flex items-center gap-1 p-1 mb-1">
				<div className="w-2 h-2 rounded bg-primary/20" />
				<Atom shade="300" className="h-2 w-20" />
			</div>

			{/* Navigation items */}
			<div className="flex items-center gap-1 p-1 rounded-md bg-primary/10 border-l-2 border-primary">
				<Home className="size-3 text-primary" />
				<Atom shade="300" className="h-2 w-16" />
			</div>

			<div className="flex items-center gap-1 p-1 rounded-md hover:bg-muted/40">
				<Users className="size-3 text-muted-foreground" />
				<Atom shade="200" className="h-2 w-12" />
			</div>

			<div className="flex items-center gap-1 p-1 rounded-md hover:bg-muted/40">
				<FileText className="size-3 text-muted-foreground" />
				<Atom shade="200" className="h-2 w-20" />
			</div>

			{/* Settings at bottom */}
			<div className="mt-auto pt-1 border-t">
				<div className="flex items-center gap-1 p-1 rounded-md hover:bg-muted/40">
					<Settings className="size-3 text-muted-foreground" />
					<Atom shade="200" className="h-2 w-14" />
				</div>
			</div>
		</div>
	);
}
export function ScrollBarLoFi() {
	return (
		<div className="flex flex-col h-[95px] w-3 bg-muted/20 rounded">
			{/* Up arrow */}
			<div className="flex items-center justify-center h-4 border-b">
				<ChevronUp className="size-2" />
			</div>

			{/* Scrollable track */}
			<div className="flex-1 relative bg-muted/10">
				{/* Scroll thumb */}
				<div className="absolute top-2 left-0.5 right-0.5 h-6 bg-muted rounded-sm" />
			</div>

			{/* Down arrow */}
			<div className="flex items-center justify-center h-4 border-t">
				<ChevronDown className="size-2" />
			</div>
		</div>
	);
}
export function CookieSettingsLoFi() {
	return (
		<div className="flex flex-col gap-3 p-1 border rounded-lg bg-background max-w-sm">
			{/* Essential cookies (always enabled) */}
			<div className="flex items-center justify-between p-1 border rounded-md bg-muted/20">
				<div className="flex items-center gap-1">
					<Shield className="size-3 text-green-600" />
					<div className="flex flex-col gap-1">
						<Atom shade="300" className="h-1.5 w-16" />
						<Atom shade="100" className="h-1 w-16" />
					</div>
				</div>
				<div className="w-6 h-3 rounded-full bg-green-600" />
			</div>

			{/* Analytics cookies */}
			<div className="flex items-center justify-between p-1 border rounded-md">
				<div className="flex items-center gap-1">
					<BarChart3 className="size-3 text-blue-600" />
					<div className="flex flex-col gap-1">
						<Atom shade="300" className="h-1.5 w-8" />
						<Atom shade="100" className="h-1 w-9" />
					</div>
				</div>
				<div className="w-6 h-3 rounded-full bg-primary/20 border border-primary/40">
					<div className="w-2 h-2 rounded-full bg-primary translate-x-3 translate-y-0.5" />
				</div>
			</div>
		</div>
	);
}
export function AlertDialogLoFi() {
	return (
		<Atom shade="50" className="flex flex-col gap-3 rounded-lg border p-4 w-64">
			<Atom shade="300" className="h-4 w-3/4" />
			<Atom shade="200" className="h-2 w-full" />
			<div className="flex justify-end gap-2 mt-2">
				<Atom shade="400" className="h-6 w-12 rounded" />
				<Atom shade="500" className="h-6 w-12 rounded" />
			</div>
		</Atom>
	);
}
export function AspectRatioLoFi() {
	return (
		<Atom shade="100" className="relative aspect-video overflow-hidden rounded">
			<Atom shade="300" className="absolute inset-0" />
		</Atom>
	);
}
export function AvatarLoFi() {
	return <Atom shade="300" className="size-8 rounded-full" />;
}
export function BadgeLoFi() {
	return <Atom shade="500" className="inline-flex h-5 w-16 rounded-full" />;
}
export function BreadcrumbLoFi() {
	return (
		<div className="flex items-center gap-1">
			<Atom shade="300" className="h-3 w-8" />
			<span>/</span>
			<Atom shade="300" className="h-3 w-12" />
			<span>/</span>
			<Atom shade="500" className="h-3 w-6" />
		</div>
	);
}
export function CalendarLoFi() {
	return (
		<Atom shade="50" className="flex flex-col gap-1 rounded-lg border p-2 w-56">
			<div className="flex justify-between">
				<Atom shade="300" className="h-2 w-16" />
				<Atom shade="300" className="h-2 w-16" />
			</div>
			<div className="grid grid-cols-7 gap-1">
				{[...Array(7)].map((_, i) => (
					<Atom key={`day-${i}`} shade="200" className="h-2 w-2" />
				))}
				{[...Array(28)].map((_, i) => (
					<Atom key={`date-${i}`} shade={i === 15 ? "500" : "100"} className="h-2 w-2" />
				))}
			</div>
		</Atom>
	);
}
export function CarouselLoFi() {
	return (
		<div className="relative">
			<Atom shade="100" className="aspect-video rounded-lg" />
			<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
				{[...Array(3)].map((_, i) => (
					<Atom key={i} shade={i === 1 ? "500" : "300"} className="size-2 rounded-full" />
				))}
			</div>
		</div>
	);
}
export function CheckboxLoFi() {
	return (
		<div className="flex items-center gap-2">
			<Atom shade="100" className="size-4 rounded border" />
			<Atom shade="300" className="h-3 w-16" />
		</div>
	);
}
export function CollapsibleLoFi() {
	return (
		<div className="flex flex-col gap-1 border rounded p-2 w-48">
			<div className="flex justify-between items-center">
				<Atom shade="300" className="h-4 w-3/4" />
				<ChevronDown className="size-3" />
			</div>
		</div>
	);
}
export function ComboboxLoFi() {
	return (
		<div className="relative w-40">
			<Atom shade="100" className="flex items-center justify-between rounded border px-2 py-1">
				<Atom shade="300" className="h-3 w-3/4" />
				<ChevronDown className="size-3" />
			</Atom>
		</div>
	);
}
export function DataTableLoFi() {
	return (
		<div className="rounded-lg border w-full">
			{/* Header */}
			<div className="border-b p-3">
				<div className="flex gap-4">
					<Atom shade="300" className="h-3 w-[30%]" />
					<Atom shade="300" className="h-3 w-[25%]" />
					<Atom shade="300" className="h-3 w-[20%]" />
					<Atom shade="300" className="h-3 w-[25%]" />
				</div>
			</div>

			{/* Rows */}
			<div className="border-b p-3">
				<div className="flex gap-4">
					<Atom shade="100" className="h-2 w-[30%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
					<Atom shade="100" className="h-2 w-[20%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
				</div>
			</div>

			<div className="p-3">
				<div className="flex gap-4">
					<Atom shade="100" className="h-2 w-[30%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
					<Atom shade="100" className="h-2 w-[20%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
				</div>
			</div>
		</div>
	);
}
export function DatePickerLoFi() {
	return (
		<Atom shade="100" className="flex items-center justify-between rounded border px-2 py-1 w-40">
			<Atom shade="300" className="h-3 w-24" />
			<Atom shade="400" className="size-4 rounded" />
		</Atom>
	);
}
export function DialogLoFi() {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
			<Atom shade="50" className="rounded-lg border p-4 w-64">
				<Atom shade="300" className="h-4 w-3/4 mb-2" />
				<Atom shade="200" className="h-2 w-full mb-4" />
				<div className="flex justify-end gap-2">
					<Atom shade="400" className="h-6 w-12 rounded" />
					<Atom shade="500" className="h-6 w-12 rounded" />
				</div>
			</Atom>
		</div>
	);
}
export function DropdownMenuLoFi() {
	return (
		<div className="relative w-40">
			<Atom shade="100" className="flex items-center justify-between rounded border px-2 py-1">
				<Atom shade="300" className="h-3 w-3/4" />
				<ChevronDown className="size-3" />
			</Atom>
		</div>
	);
}
export function FormLoFi() {
	return (
		<Atom shade="50" className="flex flex-col gap-3 rounded-lg border p-4">
			<div className="space-y-2">
				<Atom shade="300" className="h-3 w-16" />
				<Atom shade="100" className="h-8 w-full rounded border" />
			</div>
			<div className="flex items-center gap-2">
				<Atom shade="100" className="size-4 rounded border" />
				<Atom shade="300" className="h-3 w-32" />
			</div>
			<Atom shade="500" className="h-8 w-24 rounded self-end" />
		</Atom>
	);
}
export function HoverCardLoFi() {
	return (
		<div className="relative inline-block">
			<Atom shade="500" className="h-6 w-20 rounded" />
			<Atom shade="50" className="absolute hidden top-full mt-1 left-0 rounded-lg border p-3 w-48">
				<Atom shade="300" className="h-3 w-3/4 mb-1" />
				<Atom shade="200" className="h-2 w-full" />
			</Atom>
		</div>
	);
}
export function InputLoFi() {
	return (
		<div className="space-y-1">
			<Atom shade="300" className="h-3 w-16" />
			<Atom shade="100" className="h-8 w-full rounded border" />
		</div>
	);
}
export function LabelLoFi() {
	return <Atom shade="300" className="h-4 w-16" />;
}
export function MenubarLoFi() {
	return (
		<div className="flex border rounded p-1 gap-1 w-full">
			{["File", "Edit", "View"].map((item) => (
				<Atom key={item} shade="100" className="px-2 py-1 rounded">
					<Atom shade="300" className="h-3 w-5 mx-auto" />
				</Atom>
			))}
		</div>
	);
}
export function PaginationLoFi() {
	return (
		<div className="flex items-center gap-1">
			<Atom shade="100" className="size-8 rounded border" />
			{[1, 2, 3].map((page) => (
				<Atom key={page} shade={page === 2 ? "500" : "100"} className="size-8 rounded border" />
			))}
			<Atom shade="100" className="size-8 rounded border" />
		</div>
	);
}
export function ProgressLoFi() {
	return (
		<div className="space-y-1 w-full">
			<div className="flex justify-between">
				<Atom shade="300" className="h-3 w-16" />
				<Atom shade="300" className="h-3 w-8" />
			</div>
			<Atom shade="100" className="h-2 w-full rounded-full overflow-hidden">
				<Atom shade="500" className="h-full w-3/4" />
			</Atom>
		</div>
	);
}
export function RadioGroupLoFi() {
	return (
		<div className="space-y-2">
			{["Option 1", "Option 2"].map((option) => (
				<div key={option} className="flex items-center gap-2">
					<Atom shade="100" className="size-4 rounded-full border" />
					<Atom shade="300" className="h-3 w-16" />
				</div>
			))}
		</div>
	);
}
export function SelectLoFi() {
	return (
		<div className="relative w-40">
			<Atom shade="100" className="flex items-center justify-between rounded border px-2 py-1">
				<Atom shade="300" className="h-3 w-3/4" />
				<ChevronDown className="size-3" />
			</Atom>
		</div>
	);
}
export function SkeletonLoFi() {
	return (
		<div className="space-y-2">
			<Atom shade="100" className="h-4 w-3/4 rounded" />
			<Atom shade="100" className="h-3 w-full rounded" />
			<Atom shade="100" className="h-3 w-2/3 rounded" />
		</div>
	);
}
export function SliderLoFi() {
	return (
		<div className="space-y-2 w-full">
			<Atom shade="100" className="relative h-1 w-full rounded-full">
				<Atom shade="500" className="absolute h-1 w-3/4 rounded-full" />
				<Atom shade="500" className="absolute -top-1.5 -ml-1.5 size-3 rounded-full" style={{ left: "75%" }} />
			</Atom>
			<div className="flex justify-between">
				<Atom shade="300" className="h-3 w-8" />
				<Atom shade="300" className="h-3 w-8" />
			</div>
		</div>
	);
}
export function SwitchLoFi() {
	return (
		<Atom shade="300" className="relative inline-flex h-5 w-9 rounded-full px-0.5">
			<Atom shade="50" className="size-4 translate-x-4 rounded-full" />
		</Atom>
	);
}
export function TabsLoFi() {
	return (
		<div className="flex flex-col">
			{/* Tab Headers */}
			<div className="flex border-b">
				<div className="px-4 py-2 border-b-2 border-primary bg-background">
					<Atom shade="300" className="h-3 w-12" />
				</div>
				<div className="px-4 py-2 border-b-2 border-transparent bg-muted/30">
					<Atom shade="200" className="h-3 w-12" />
				</div>
				<div className="px-4 py-2 border-b-2 border-transparent bg-muted/30">
					<Atom shade="200" className="h-3 w-12" />
				</div>
			</div>

			{/* Tab Content */}
			<div className="p-4 bg-background">
				<div className="flex flex-col gap-2">
					<Atom shade="300" className="h-3 w-3/4" />
					<Atom shade="200" className="h-2 w-full" />
					<Atom shade="200" className="h-2 w-2/3" />
				</div>
			</div>
		</div>
	);
}
export function TextareaLoFi() {
	return (
		<div className="space-y-1">
			<Atom shade="300" className="h-3 w-16" />
			<Atom shade="100" className="h-15 w-full rounded border" />
		</div>
	);
}
export function ToastLoFi() {
	return (
		<Atom shade="50" className="flex items-start gap-2 rounded-lg border p-3 shadow-lg w-64">
			<Atom shade="500" className="size-4 rounded-full" />
			<div className="flex-1 space-y-1">
				<Atom shade="300" className="h-3 w-3/4" />
				<Atom shade="200" className="h-2 w-full" />
			</div>
		</Atom>
	);
}
export function TooltipLoFi() {
	return (
		<div className="relative inline-block">
			<Atom shade="500" className="h-6 w-20 rounded" />
			<Atom shade="900" className="absolute hidden top-full mt-1 left-1/2 transform -translate-x-1/2 rounded px-2 py-1">
				<Atom shade="50" className="h-3 w-16" />
			</Atom>
		</div>
	);
}
