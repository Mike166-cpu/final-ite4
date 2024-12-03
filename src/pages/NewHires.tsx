import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewHires = () => {
  const newHires = [
    {
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
      startDate: "2024-03-15",
      status: "Documentation Pending"
    },
    {
      name: "Jane Smith",
      position: "Marketing Specialist",
      department: "Marketing",
      startDate: "2024-03-18",
      status: "Orientation Scheduled"
    },
    {
      name: "Mike Johnson",
      position: "Sales Representative",
      department: "Sales",
      startDate: "2024-03-20",
      status: "IT Setup In Progress"
    },
    {
      name: "Sarah Wilson",
      position: "HR Coordinator",
      department: "Human Resources",
      startDate: "2024-03-22",
      status: "Completed"
    }
  ];

  return (
    <div>
      <title>New Hires | HR Management System</title>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">New Hires</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Add New Hire
        </button>
      </div>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Recent New Hires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Position</th>
                  <th className="text-left py-3 px-4">Department</th>
                  <th className="text-left py-3 px-4">Start Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {newHires.map((hire, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{hire.name}</td>
                    <td className="py-3 px-4">{hire.position}</td>
                    <td className="py-3 px-4">{hire.department}</td>
                    <td className="py-3 px-4">{hire.startDate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        hire.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {hire.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewHires;