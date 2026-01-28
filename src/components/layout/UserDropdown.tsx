"use client"; // THIS MAKES IT A CLIENT COMPONENT

import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const UserDropdown = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/sign-out`, {
        method: "POST",
        credentials: "include", 
      });

      if (response.ok) {
        setTimeout(() => {
          router.push("/"); 
        }, 500);
        toast.success("Logged out successfully");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout.");
    }
  };

  return (
    <details className="dropdown">
      <summary className="btn m-1 bg-primary text-zinc-50">
        <CircleUserRound />
      </summary>
      <ul className="menu dropdown-content bg-blue-400 text-zinc-50 rounded-box w-52 p-2 shadow-sm">
        <li>
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-blue-500 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/cart" className="block px-4 py-2 hover:bg-blue-500 rounded">
            Cart
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-red-500 rounded"
          >
            Logout
          </button>
        </li>
      </ul>
    </details>
  );
};
