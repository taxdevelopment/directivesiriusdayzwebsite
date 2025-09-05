'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-cover bg-center"
      style={{
        backgroundColor: 'rgb(104, 0, 204)',
        backgroundImage: 'url(/images/hero.jpg)',
      }}
    >
      {/* Centered Content Box */}
      <div className="max-w-4xl w-full bg-neutral-900 bg-opacity-90 px-8 py-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Terms of Service</h1>
        <p className="mb-4 text-neutral-200">
          Welcome to our server store. By accessing or using our services, you agree
          to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Purchases</h2>
        <p className="mb-4 text-neutral-200">
          All purchases are final unless otherwise stated. Perks and skins are applied
          instantly upon payment. Refunds may only be granted at the discretion of the
          server administration.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">User Conduct</h2>
        <p className="mb-4 text-neutral-200">
          Users must not abuse the store, exploit glitches, or attempt unauthorized
          access. Violations may result in suspension or banning from server services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Intellectual Property</h2>
        <p className="mb-4 text-neutral-200">
          All content, images, and digital goods sold are the property of the server
          or its licensors. You may not redistribute or claim ownership of purchased
          items.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Changes</h2>
        <p className="mb-4 text-neutral-200">
          We reserve the right to modify these Terms of Service at any time. Users
          are encouraged to review these terms regularly.
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
