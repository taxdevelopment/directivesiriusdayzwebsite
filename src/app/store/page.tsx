import { config } from '../../config';
import { useRouter } from 'next/navigation'; // Next.js 13+ app router

export default function StorePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-4">
      <h1 className="text-4xl font-bold mb-4">Store - {config.site.title}</h1>
      <p className="text-lg mb-6 text-center">
        Welcome to the Directive Sirius Store! Here you can find exclusive Ranks, Priority Queue, and more.
      </p>

      {/* Centered "Work in Progress" button */}
      <button
        onClick={() => router.push('/')} // Navigate to homepage
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        WORK IN PROGRESS...
      </button>
    </main>
  );
}
