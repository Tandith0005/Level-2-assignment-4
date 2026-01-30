"use client";

import { Box, ShoppingCart, Package, Users } from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "24",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Pending Orders",
    value: "5",
    icon: Package,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Delivered",
    value: "18",
    icon: Box,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Support Tickets",
    value: "2",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome back 👋
        </h1>
        <p className="text-gray-500">
          Here’s what’s happening with your account today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.value}
                </h2>
              </div>
              <div
                className={`p-3 rounded-full ${item.color}`}
              >
                <item.icon size={22} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>🛒 Order #1024 placed successfully</li>
          <li>📦 Order #1021 delivered</li>
          <li>💬 Support ticket replied</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
