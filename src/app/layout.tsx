"use client";

import "~/styles/globals.css";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { useAuth, AuthProvider } from "~/context/AuthContext"; // AuthProvider をインポート
import { useState } from "react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <AuthProvider> {/* AuthProvider で全体をラップ */}
          <Toaster position="top-center" reverseOrder={false} />
          <NavigationBar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

function NavigationBar() {
  const { isLoggedIn, username, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold">
          <Link href="/">Gym Membership</Link>
        </h1>
        <div className="relative">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="hover:underline"
              >
                {username}
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowMenu(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout(); // ログアウト処理を呼び出す
                      setShowMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="space-x-4">
              <Link href="/register" className="hover:underline">
                Register
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
