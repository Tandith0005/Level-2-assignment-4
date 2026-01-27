"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/mediStore(1).png"
            alt="MediStore Logo"
            className="object-contain"
            width={100}
            height={100}
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Create an Account
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text text-gray-700">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4 w-full">
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
