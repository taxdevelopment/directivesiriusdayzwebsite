'use client';

import Link from 'next/link';

export default function FulfillmentPage() {
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
        <h1 className="text-4xl font-bold mb-4 text-white">Fulfillment Policy</h1>
        <p className="mb-4 text-neutral-200">
          This policy explains how purchases, perks, and products are delivered.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Delivery of Perks</h2>
        <p className="mb-4 text-neutral-200">
          Perks such as queue priority, VIP roles, and skins are applied instantly after payment confirmation.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Gift Codes</h2>
        <p className="mb-4 text-neutral-200">
          Gift products generate redeemable codes that can be used by friends. Codes do not expire unless stated otherwise.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Issues & Support</h2>
        <p className="mb-4 text-neutral-200">
          If you encounter problems with fulfillment, contact our support team. We aim to resolve issues promptly.
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
