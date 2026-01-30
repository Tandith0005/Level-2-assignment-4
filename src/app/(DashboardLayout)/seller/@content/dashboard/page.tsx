"use client";

import React from "react";
import Link from "next/link";
import { Box, ShoppingCart, Package, Users } from "lucide-react";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  md:flex-row pt-10">
      

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-8 md:w-full w-105">
          <h1 className="text-2xl font-bold text-blue-600">Welcome, Seller!</h1>

          <Link href="/seller/add-medicine">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
              Add Medicine
            </button>
          </Link>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 md:w-full w-105">
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
        <div className="bg-white shadow rounded p-4 md:p-6">
  <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      {/* head */}
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Medicine</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#1001</td>
          <td>John Doe</td>
          <td>Paracetamol</td>
          <td>2</td>
          <td>
            <span className="badge badge-success gap-1">
              Completed
            </span>
          </td>
        </tr>

        <tr>
          <td>#1002</td>
          <td>Jane Smith</td>
          <td>Aspirin</td>
          <td>1</td>
          <td>
            <span className="badge badge-warning gap-1">
              Pending
            </span>
          </td>
        </tr>

        {/* Add more rows here as needed */}
      </tbody>
    </table>
  </div>

  {/* Optional mobile hint */}
  <p className="mt-3 text-xs text-gray-500 text-center md:hidden">
    Scroll horizontally to see all columns →
  </p>
</div>

      </main>
    </div>
  );
};

export default SellerDashboard;
