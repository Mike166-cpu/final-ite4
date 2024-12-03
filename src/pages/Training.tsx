import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Users, Award, TrendingUp } from 'lucide-react';

const Training = () => {
  const trainingStats = [
    {
      title: "Active Courses",
      value: "15",
      description: "Running courses",
      icon: Book,
      trend: "+3 this month"
    },
    {
      title: "Enrolled Users",
      value: "89",
      description: "Current participants",
      icon: Users,
      trend: "+12 this week"
    },
    {
      title: "Certifications",
      value: "234",
      description: "Awarded this year",
      icon: Award,
      trend: "+45 vs last year"
    },
    {
      title: "Completion Rate",
      value: "92%",
      description: "Average success",
      icon: TrendingUp,
      trend: "+5% vs target"
    }
  ];

  return (
    <div>
      <title>Training | HR Management System</title>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Training Overview</h1>
        <div className="text-sm text-muted-foreground">Last updated: Today at 10:00 AM</div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {trainingStats.map((stat, index) => (
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
            <CardTitle>Popular Training Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Safety Fundamentals", enrolled: 45, completion: "85%" },
                { name: "Leadership Skills", enrolled: 32, completion: "78%" },
                { name: "Technical Skills", enrolled: 28, completion: "92%" },
                { name: "Communication", enrolled: 25, completion: "88%" }
              ].map((program, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div>
                    <p className="font-medium">{program.name}</p>
                    <p className="text-sm text-muted-foreground">{program.enrolled} enrolled</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{program.completion}</p>
                    <p className="text-sm text-muted-foreground">completion</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "New Employee Orientation", date: "March 15, 2024", time: "09:00 AM" },
                { title: "Project Management Basics", date: "March 16, 2024", time: "02:00 PM" },
                { title: "Customer Service Excellence", date: "March 17, 2024", time: "10:00 AM" },
                { title: "Data Security Training", date: "March 18, 2024", time: "11:00 AM" }
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div>
                    <p className="font-medium">{session.title}</p>
                    <p className="text-sm text-muted-foreground">{session.date}</p>
                  </div>
                  <div className="text-primary font-medium">{session.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;