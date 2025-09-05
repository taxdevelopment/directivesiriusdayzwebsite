'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-cover bg-center"
      style={{
        backgroundColor: 'rgb(104, 0, 204)',
        backgroundImage: 'url(/images/hero.jpg)',
      }}
    >
      {/* Content Box */}
      <div className="max-w-4xl w-full bg-neutral-900 bg-opacity-90 px-8 py-12 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="mb-4 text-neutral-200">
          We respect your privacy. This policy explains what information we collect, how it is used, and your rights.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Information We Collect</h2>
        <p className="mb-4 text-neutral-200">
          We may collect information such as email, payment details, and usage data to provide our services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">How We Use Your Data</h2>
        <p className="mb-4 text-neutral-200">
          Your information is used to process transactions, improve services, and communicate updates.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Third-Party Services</h2>
        <p className="mb-4 text-neutral-200">
          We may share minimal information with trusted third-party providers, such as payment processors.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Changes</h2>
        <p className="mb-4 text-neutral-200">
          We may update this policy from time to time. Users are encouraged to review it periodically.
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-sm text-neutral-300 space-x-6 mb-6">
        <Link href="/legal/terms" className="hover:text-white">
          Terms of Service
        </Link>
        <Link href="/legal/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
        <Link href="/legal/fulfillment" className="hover:text-white">
          Fulfillment Policy
        </Link>
      </footer>
    </main>
  );
}
