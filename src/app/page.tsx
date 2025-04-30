"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Gym</h1>
        <p className="text-gray-600 mb-6">Join us today and start your fitness journey!</p>
        <div className="space-x-4">
          <Link
            href="/register"
            className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register Now
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
