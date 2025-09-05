'use client';

export default function FulfillmentPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-24 px-4">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-purple-900/30" />

      {/* Content */}
      <div className="relative max-w-4xl w-full px-8 py-12 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Fulfillment Policy</h1>

        <p className="mb-4">
          All digital products are fulfilled instantly after purchase. You will receive your VIP access or custom skins immediately on the server.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Instant Delivery</h2>
        <p className="mb-4">
          Once payment is confirmed, your perks are applied automatically. There is no need to wait.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">2. Codes & Redeemables</h2>
        <p className="mb-4">
          For skins or giftable products, a redeemable code will be provided instantly.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">3. Issues</h2>
        <p className="mb-4">
          If you do not receive your product, contact our support immediately with your purchase details.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Refunds</h2>
        <p className="mb-4">
          Digital products are non-refundable once delivered.
        </p>
      </div>
    </main>
  );
}
