"use client";

import React from "react";
import Link from "next/link";
import { Box, ShoppingCart, Package, Users } from "lucide-react";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row pt-25">
      
      {/* Sidebar */}
      <aside className="bg-white shadow-lg md:w-64 w-full md:h-screen">
        <div className="p-4 md:p-6 text-center border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Seller Panel</h2>
          <p className="text-gray-500 text-sm">Manage your store</p>
        </div>

        <nav className="flex md:flex-col flex-row md:gap-2 gap-4 p-4 justify-around md:justify-start">
          <Link href="/seller/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <Box className="w-5 h-5" />
            <span className="hidden md:inline">Dashboard</span>
          </Link>

          <Link href="/seller/medicines" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <Package className="w-5 h-5" />
            <span className="hidden md:inline">Medicines</span>
          </Link>

          <Link href="/seller/orders" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden md:inline">Orders</span>
          </Link>

          <Link href="/seller/profile" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <Users className="w-5 h-5" />
            <span className="hidden md:inline">Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Seller!</h1>

          <Link href="/seller/add-medicine">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
              Add Medicine
            </button>
          </Link>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded p-6 flex flex-col items-center">
            <Package className="w-10 h-10 text-blue-500 mb-2" />
            <p className="text-gray-500">Total Medicines</p>
            <p className="text-xl font-bold">42</p>
          </div>

          <div className="bg-white shadow rounded p-6 flex flex-col items-center">
            <ShoppingCart className="w-10 h-10 text-green-500 mb-2" />
            <p className="text-gray-500">Incoming Orders</p>
            <p className="text-xl font-bold">15</p>
          </div>

          <div className="bg-white shadow rounded p-6 flex flex-col items-center">
            <Box className="w-10 h-10 text-yellow-500 mb-2" />
            <p className="text-gray-500">Stock Low</p>
            <p className="text-xl font-bold">8</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded p-4 md:p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

          <table className="min-w-[600px] w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Medicine</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">#1001</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">Paracetamol</td>
                <td className="p-2">2</td>
                <td className="p-2 text-green-600 font-semibold">Completed</td>
              </tr>

              <tr className="border-b">
                <td className="p-2">#1002</td>
                <td className="p-2">Jane Smith</td>
                <td className="p-2">Aspirin</td>
                <td className="p-2">1</td>
                <td className="p-2 text-yellow-500 font-semibold">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default SellerDashboard;
