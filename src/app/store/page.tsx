'use client';

import { useRouter } from 'next/navigation';

export default function StorePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-4">
      <h1 className="text-4xl font-bold mb-4">Store</h1>
      <button
        onClick={() => router.push('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        WORK IN PROGRESS...
      </button>
    </main>
  );
}
