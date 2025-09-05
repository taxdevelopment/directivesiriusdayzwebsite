'use client';

export default function FulfillmentPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start pt-24 px-4"
      style={{
        backgroundColor: 'rgb(104, 0, 204)',
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-4xl w-full px-8 py-12 flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Fulfillment Policy</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Delivery of Perks</h2>
        <p className="text-white/90 mb-4">Perks such as queue priority, VIP roles, and skins are applied instantly...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Gift Codes</h2>
        <p className="text-white/90 mb-4">Gift products generate redeemable codes for friends...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Issues & Support</h2>
        <p className="text-white/90 mb-4">Contact our support team if you encounter any problems...</p>
      </div>
    </main>
  );
}
