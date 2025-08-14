// app/components/car-service-dashboard.tsx
import { Car, Clock, DollarSign, Gauge, Users, Calendar, ChevronDown, MoreVertical, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Progress } from '~/components/ui/progress';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '~/components/ui/table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '~/components/ui/dropdown-menu';
import { Badge } from '~/components/ui/badge';

export function CarServiceDashboard() {
  // Sample data
  const stats = [
    { title: "Total Vehicles", value: "214", icon: Car, change: "+4% from last month" },
    { title: "Active Bookings", value: "32", icon: Clock, change: "+12% from last month" },
    { title: "Revenue", value: "$45,231", icon: DollarSign, change: "+19% from last month" },
    { title: "Avg. Service Time", value: "2.4h", icon: Gauge, change: "+0.4h from last month" },
  ];

  const recentBookings = [
    { id: "#BK-0001", customer: "John Smith", vehicle: "Toyota Camry", service: "Oil Change", date: "2023-06-15", status: "completed" },
    { id: "#BK-0002", customer: "Sarah Johnson", vehicle: "Honda Accord", service: "Tire Rotation", date: "2023-06-14", status: "in-progress" },
    { id: "#BK-0003", customer: "Michael Brown", vehicle: "Ford F-150", service: "Brake Service", date: "2023-06-14", status: "pending" },
    { id: "#BK-0004", customer: "Emily Davis", vehicle: "Chevrolet Malibu", service: "Battery Check", date: "2023-06-13", status: "completed" },
    { id: "#BK-0005", customer: "Robert Wilson", vehicle: "Nissan Rogue", service: "Wheel Alignment", date: "2023-06-13", status: "cancelled" },
  ];

  const upcomingServices = [
    { vehicle: "Toyota Camry", service: "60,000 Mile Service", dueDate: "2023-07-01", progress: 85 },
    { vehicle: "Honda Civic", service: "Tire Replacement", dueDate: "2023-07-05", progress: 60 },
    { vehicle: "Ford Escape", service: "Transmission Flush", dueDate: "2023-07-10", progress: 45 },
    { vehicle: "Chevrolet Silverado", service: "Engine Tune-Up", dueDate: "2023-07-15", progress: 30 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="secondary">In Progress</Badge>;
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Car Service Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            June 15, 2023
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Booking
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Bookings</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search bookings..."
                className="pl-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.customer}</TableCell>
                    <TableCell>{booking.vehicle}</TableCell>
                    <TableCell>{booking.service}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                          <DropdownMenuItem>Cancel Booking</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">32</span> bookings
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Upcoming Services */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {upcomingServices.map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{service.vehicle}</h3>
                  <span className="text-sm text-muted-foreground">{service.dueDate}</span>
                </div>
                <p className="text-sm text-muted-foreground">{service.service}</p>
                <Progress value={service.progress} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{service.progress}%</span>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Services
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Staff Availability */}
      <Card>
        <CardHeader>
          <CardTitle>Staff Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/avatars/${index + 1}.png`} />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Staff Member {index + 1}</p>
                  <p className="text-sm text-muted-foreground">Mechanic</p>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Available
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}