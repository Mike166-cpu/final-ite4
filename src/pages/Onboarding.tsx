import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, CheckCircle, Clock } from 'lucide-react';

const Onboarding = () => {
  const onboardingStats = [
    {
      title: "Active Onboarding",
      value: "8",
      description: "Employees in process",
      icon: Users,
      trend: "+2 this week"
    },
    {
      title: "Documentation",
      value: "24",
      description: "Required documents",
      icon: FileText,
      trend: "98% completion rate"
    },
    {
      title: "Completed",
      value: "45",
      description: "This quarter",
      icon: CheckCircle,
      trend: "+12% vs last quarter"
    },
    {
      title: "Average Time",
      value: "14",
      description: "Days to complete",
      icon: Clock,
      trend: "-2 days from target"
    }
  ];

  return (
    <div>
      <title>Onboarding | HR Management System</title>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Onboarding Overview</h1>
        <div className="text-sm text-muted-foreground">Updated just now</div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {onboardingStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-primary mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              "Start New Onboarding",
              "Review Pending Documents",
              "Schedule Orientation",
              "Send Welcome Package"
            ].map((action, index) => (
              <button
                key={index}
                className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
              >
                <span className="font-medium">{action}</span>
                <span className="text-primary">→</span>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { text: "New employee handbook published", time: "2 hours ago" },
                { text: "IT access request workflow updated", time: "4 hours ago" },
                { text: "Benefits enrollment process modified", time: "1 day ago" },
                { text: "Training schedule template added", time: "2 days ago" }
              ].map((update, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{update.text}</p>
                    <p className="text-xs text-muted-foreground">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;