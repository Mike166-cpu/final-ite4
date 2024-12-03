import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Eye, Clock } from 'lucide-react';

const Documentation = () => {
  const documents = [
    {
      title: "Employee Handbook",
      category: "Policies",
      lastUpdated: "2024-03-01",
      status: "Required"
    },
    {
      title: "IT Security Policy",
      category: "IT",
      lastUpdated: "2024-02-28",
      status: "Required"
    },
    {
      title: "Benefits Guide",
      category: "HR",
      lastUpdated: "2024-02-25",
      status: "Optional"
    },
    {
      title: "Code of Conduct",
      category: "Policies",
      lastUpdated: "2024-02-20",
      status: "Required"
    }
  ];

  return (
    <div>
      <title>Documentation | HR Management System</title>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Documentation</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Upload Document
        </button>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">4 new this month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Required Documents</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">98% completion rate</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Views</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Document Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Document Title</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Last Updated</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{doc.title}</td>
                    <td className="py-3 px-4">{doc.category}</td>
                    <td className="py-3 px-4">{doc.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        doc.status === 'Required' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:text-primary/80 mr-2">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-primary hover:text-primary/80">
                        <Download className="h-4 w-4" />
                      </button>
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

export default Documentation;