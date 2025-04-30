"use client";

import "~/styles/globals.css";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import { TRPCReactProvider } from "~/trpc/react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // ログイン状態を確認
    const token = localStorage.getItem("token");
    if (token) {
      // トークンをデコードしてユーザー名を取得（例: JWTを使用している場合）
      const payload = JSON.parse(atob(token.split(".")[1])); // JWTのペイロードをデコード
      setUsername(payload.email); // ペイロードからユーザー名（またはメール）を取得
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {/* ナビゲーションバー */}
        <nav className="bg-blue-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-lg font-bold">
              <Link href="/">Gym Membership</Link>
            </h1>
            <div className="space-x-4">
              {isLoggedIn ? (
                <>
                  <span>Welcome, {username}</span>
                  <button
                    onClick={handleLogout}
                    className="hover:underline text-red-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/register" className="hover:underline">
                    Register
                  </Link>
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* ページコンテンツ */}
        <main>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </main>

        {/* トースト通知 */}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
