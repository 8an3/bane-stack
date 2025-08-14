// app/routes/dashboard.tsx
import { CarServiceDashboard } from './car-service-dashboard';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CarServiceDashboard />
    </div>
  );
}
export const meta: MetaFunction = () => {
	return [{ title: "Car Service - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};

export async function loader({ request }: LoaderArgs) {
	return null;
}
