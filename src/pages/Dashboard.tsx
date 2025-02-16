
import { motion } from "framer-motion";
import { Users, FileText, Clock, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Clients",
      value: "12",
      change: "+2 this month",
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      label: "Pending Documents",
      value: "5",
      change: "3 urgent",
      color: "bg-amber-500",
    },
    {
      icon: Clock,
      label: "Avg. Onboarding Time",
      value: "4.2 days",
      change: "-12% from last month",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-600">Here's what's happening today.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-500">{stat.change}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-primary hover:text-primary/80 flex items-center text-sm font-medium">
            View all
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    New client onboarding started
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
