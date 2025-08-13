import { cn, } from "~/components/ui/utils";
import { Card, CardContent, CardHeader, CardTitle, } from "~/components/ui/card";
import { Globe, BarChart2, Zap, Code, Shield, Users, } from "lucide-react";




export function BentoGridTwoRowSecondRow() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* First row - large card */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-500" />
              <CardTitle>Global Scale</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Deploy your application to our global infrastructure with regions around the world to 
              ensure low latency no matter where your users are located.
            </p>
          </CardContent>
        </Card>

        {/* First row - small card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-green-500" />
              <CardTitle>Real-time Analytics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get real-time insights into your application's performance and user behavior.
            </p>
          </CardContent>
        </Card>

        {/* Second row - three equal cards */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              <CardTitle>Lightning Fast</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Optimized for performance with instant page loads and smooth interactions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-purple-500" />
              <CardTitle>Developer Friendly</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Clean, intuitive APIs and comprehensive documentation to get you started quickly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-500" />
              <CardTitle>Enterprise Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SOC 2 compliant infrastructure with end-to-end encryption and regular audits.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}