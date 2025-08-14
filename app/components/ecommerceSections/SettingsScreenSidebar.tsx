import { useState } from "react";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  Users, 
  Key,
  Globe,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Camera,
  Save,
  X,
  Check,
  AlertTriangle,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Navigation items for sidebar
const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
    icon: User,
  },
  {
    title: "Account",
    href: "/settings/account",
    icon: Settings,
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    icon: Bell,
  },
  {
    title: "Privacy",
    href: "/settings/privacy",
    icon: Shield,
  },
  {
    title: "Billing",
    href: "/settings/billing",
    icon: CreditCard,
  },
  {
    title: "Team",
    href: "/settings/team",
    icon: Users,
  },
];

// Template 1: Sidebar Settings
export function SettingsSidebar() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    searchEngineIndexing: true,
    dataSharing: false,
  });

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileSettings />;
      case "Account":
        return <AccountSettings showPassword={showPassword} setShowPassword={setShowPassword} />;
      case "Notifications":
        return <NotificationSettings notifications={notifications} setNotifications={setNotifications} />;
      case "Privacy":
        return <PrivacySettings privacy={privacy} setPrivacy={setPrivacy} />;
      case "Billing":
        return <BillingSettings />;
      case "Team":
        return <TeamSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {sidebarNavItems.map((item) => {
                  const isActive = activeTab === item.title;
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveTab(item.title)}
                      className={`${
                        isActive
                          ? "bg-gray-100 text-gray-900 border-r-2 border-blue-500"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left`}
                    >
                      <item.icon
                        className={`${
                          isActive ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500"
                        } mr-3 flex-shrink-0 h-5 w-5`}
                      />
                      {item.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Profile Settings Component
function ProfileSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
        <p className="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Profile Photo */}
            <div>
              <Label className="text-sm font-medium text-gray-700">Photo</Label>
              <div className="mt-1 flex items-center space-x-5">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm border border-gray-300">
                    <Camera className="h-3 w-3 text-gray-400" />
                  </button>
                </div>
                <div className="space-x-3">
                  <Button variant="outline" size="sm">Change</Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    Remove
                  </Button>
                </div>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  type="text"
                  defaultValue="John"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  type="text"
                  defaultValue="Doe"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="mt-1"
              />
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                className="mt-1"
                defaultValue="I'm a software developer passionate about creating beautiful and functional web applications."
              />
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                defaultValue="San Francisco, CA"
                className="mt-1"
              />
            </div>

            {/* Website */}
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                defaultValue="https://johndoe.dev"
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Account Settings Component
function AccountSettings({ showPassword, setShowPassword }: { showPassword: boolean; setShowPassword: (show: boolean) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Account</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and security preferences.
        </p>
      </div>

      {/* Login Information */}
      <Card>
        <CardHeader>
          <CardTitle>Login Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              defaultValue="johndoe"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="current-password">Current Password</Label>
            <div className="relative mt-1">
              <Input
                id="current-password"
                type={showPassword ? "text" : "password"}
                defaultValue="password123"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              className="mt-1"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              className="mt-1"
              placeholder="Confirm new password"
            />
          </div>

          <Button>Update Password</Button>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Authenticator App</p>
                <p className="text-sm text-gray-500">Use an authenticator app to generate codes</p>
              </div>
            </div>
            <Badge variant="secondary">Enabled</Badge>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible and destructive actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Delete Account</h4>
                <p className="text-sm text-gray-500">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive" size="sm">
                Delete Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Notification Settings Component
function NotificationSettings({ notifications, setNotifications }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
        <p className="mt-1 text-sm text-gray-500">
          Choose how you want to be notified about activity.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Comments</Label>
              <p className="text-sm text-gray-500">Get notified when someone comments on your posts</p>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Security alerts</Label>
              <p className="text-sm text-gray-500">Get notified about security updates</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Everything</Label>
              <p className="text-sm text-gray-500">Get push notifications for all activity</p>
            </div>
            <Switch
              checked={notifications.push}
              onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Same as email</Label>
              <p className="text-sm text-gray-500">Get push notifications for the same events as email</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Privacy Settings Component  
function PrivacySettings({ privacy, setPrivacy }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Privacy</h3>
        <p className="mt-1 text-sm text-gray-500">
          Control your privacy and data sharing preferences.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div>
            <Label htmlFor="visibility">Profile Visibility</Label>
            <Select value={privacy.profileVisibility} onValueChange={(value) => setPrivacy({ ...privacy, profileVisibility: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="friends">Friends Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Search Engine Indexing</Label>
              <p className="text-sm text-gray-500">Allow search engines to index your profile</p>
            </div>
            <Switch
              checked={privacy.searchEngineIndexing}
              onCheckedChange={(checked) => setPrivacy({ ...privacy, searchEngineIndexing: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Data Sharing</Label>
              <p className="text-sm text-gray-500">Share usage data to improve our services</p>
            </div>
            <Switch
              checked={privacy.dataSharing}
              onCheckedChange={(checked) => setPrivacy({ ...privacy, dataSharing: checked })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Billing Settings Component
function BillingSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Billing</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your subscription and payment methods.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-medium">Pro Plan</h4>
              <p className="text-sm text-gray-500">$29/month • Billed monthly</p>
            </div>
            <Badge>Current</Badge>
          </div>
          <div className="mt-4">
            <Button variant="outline">Change Plan</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8 text-gray-400" />
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/24</p>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm">Update</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Team Settings Component
function TeamSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Team</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your team members and their permissions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <div className="flex justify-between items-center">
            <CardDescription>Invite and manage your team members</CardDescription>
            <Button size="sm">Invite Member</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "John Doe", email: "john@example.com", role: "Owner", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
              { name: "Jane Smith", email: "jane@example.com", role: "Admin", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
              { name: "Mike Johnson", email: "mike@example.com", role: "Member", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            ].map((member, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={member.role === 'Owner' ? 'default' : 'secondary'}>
                    {member.role}
                  </Badge>
                  {member.role !== 'Owner' && (
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}