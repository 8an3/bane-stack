 
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  ChevronDown,
  Plus,
  Filter,
  MoreHorizontal,
  Calendar,
  TrendingUp,
  DollarSign,
  Activity
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

const HomeScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '#', icon: Home, current: true },
    { name: 'Team', href: '#', icon: Users, current: false },
    { name: 'Analytics', href: '#', icon: BarChart3, current: false },
    { name: 'Settings', href: '#', icon: Settings, current: false },
  ];

  const stats = [
    { name: 'Total Revenue', stat: '$45,231.89', previousStat: '$37,231.89', change: '+20.1%', changeType: 'increase' },
    { name: 'Active Users', stat: '2,234', previousStat: '1,893', change: '+18.0%', changeType: 'increase' },
    { name: 'Sales', stat: '12,234', previousStat: '11,234', change: '+8.9%', changeType: 'increase' },
    { name: 'Conversion Rate', stat: '3.2%', previousStat: '2.8%', change: '+14.3%', changeType: 'increase' },
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created a new project', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated user permissions', time: '4 hours ago' },
    { id: 3, user: 'Mike Johnson', action: 'Completed task review', time: '6 hours ago' },
    { id: 4, user: 'Sarah Wilson', action: 'Added new team member', time: '8 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:block`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-900">Acme Inc</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.current
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${item.current ? 'text-blue-700' : 'text-gray-400'}`} />
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mt-8">
            <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Projects</h3>
            <div className="mt-2 space-y-1">
              {['Project Alpha', 'Beta Release', 'Mobile App'].map((project) => (
                <a
                  key={project}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
                  {project}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* User profile section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src="" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-500"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="ml-4 lg:ml-0">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Notifications */}
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-5 h-5" />
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                    <div className="border-t border-gray-100" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign out</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {/* Page header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Welcome back, John!</h2>
                <p className="mt-1 text-sm text-gray-600">Here's what's happening with your projects today.</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </button>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{item.name}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">{item.stat}</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {item.name === 'Total Revenue' && <DollarSign className="w-5 h-5 text-blue-600" />}
                    {item.name === 'Active Users' && <Users className="w-5 h-5 text-blue-600" />}
                    {item.name === 'Sales' && <TrendingUp className="w-5 h-5 text-blue-600" />}
                    {item.name === 'Conversion Rate' && <Activity className="w-5 h-5 text-blue-600" />}
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-sm font-medium text-green-600">
                    {item.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
                  <button className="p-1 text-gray-400 hover:text-gray-500">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">Chart data would go here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="" alt={activity.user} />
                      <AvatarFallback>
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional content row */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Users className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="font-medium text-gray-900">Add Team Member</p>
                  <p className="text-sm text-gray-500">Invite new users</p>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Calendar className="w-6 h-6 text-green-600 mb-2" />
                  <p className="font-medium text-gray-900">Schedule Meeting</p>
                  <p className="text-sm text-gray-500">Book time slots</p>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
              <div className="space-y-4">
                {[
                  { name: 'Website Redesign', progress: 75, color: 'blue' },
                  { name: 'Mobile App', progress: 45, color: 'green' },
                  { name: 'API Integration', progress: 90, color: 'purple' },
                ].map((project) => (
                  <div key={project.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{project.name}</span>
                      <span className="text-sm text-gray-500">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-${project.color}-600`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeScreen;