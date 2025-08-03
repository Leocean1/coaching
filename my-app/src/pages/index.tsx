// pages/index.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl text-black font-bold mb-8">Welcome to Smart Coaching</h1>
      <div className="space-y-4 text-center">
        <Link href="/admin">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow">Admin Panel</button>
        </Link>
        <Link href="/student">
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow">Student Panel</button>
        </Link>
        <Link href="/teacher">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow">Teacher Panel</button>
        </Link>
      </div>
    </main>
  );
}
