import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, TrendingUp, Clock, Target } from 'lucide-react';
import { Progress as ProgressIndicator } from '@/components/ui/progress';

const Progress = () => {
  const trainees = [
    {
      name: "John Smith",
      course: "Safety and Compliance",
      progress: 85,
      
      timeSpent: "12h 30m",
      status: "On Track"
    },
    {
      name: "Emma Wilson",
      course: "Leadership Fundamentals",
      progress: 92,
      timeSpent: "15h 45m",
      status: "Ahead"
    },
    {
      name: "Michael Brown",
      course: "Technical Skills 101",
      progress: 78,
      timeSpent: "10h 15m",
      status: "Behind"
    },
    {
      name: "Sarah Davis",
      course: "Communication Skills",
      progress: 95,
      timeSpent: "14h 20m",
      status: "On Track"
    }
  ];

  return (
    <div>
      <title>Progress | HR Management System</title>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Training Progress</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Invested</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Above target</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certifications</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Awarded this month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Individual Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {trainees.map((trainee, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{trainee.name}</p>
                    <p className="text-sm text-muted-foreground">{trainee.course}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trainee.status === 'Ahead' 
                      ? 'bg-green-100 text-green-800'
                      : trainee.status === 'Behind'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {trainee.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <ProgressIndicator value={trainee.progress} className="h-2" />
                  </div>
                  <div className="min-w-[4rem] text-sm font-medium">{trainee.progress}%</div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Time spent: {trainee.timeSpent}</span>
                  <span>Target: 15h 00m</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;