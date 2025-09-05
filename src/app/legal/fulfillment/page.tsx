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
      <div className="max-w-4xl w-full px-8 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Fulfillment Policy</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">1. Order Fulfillment</h2>
        <p className="text-white/90 mb-4">
          All purchases of digital products, including VIP access, custom skins,
          and in-game items, are delivered electronically. Delivery is generally
          instant, within 10 minutes of purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">2. Delivery Process</h2>
        <p className="text-white/90 mb-4">
          Once payment is confirmed, virtual items or VIP privileges are applied
          automatically to your account. No physical shipping is involved.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">3. Refunds and Cancellations</h2>
        <p className="text-white/90 mb-4">
          Due to the immediate delivery of digital goods, cancellations and
          refunds are not available. Please verify your purchase before
          completing the order.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">4. Customer Support</h2>
        <p className="text-white/90 mb-4">
          For issues with purchases or delayed delivery, submit a support ticket
          on our Discord. Our team will assist promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">5. Payment Verification</h2>
        <p className="text-white/90 mb-4">
          Orders are processed after successful verification via Stripe or PayPal.
          Failed transactions will not grant access to products.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">6. Contact Information</h2>
        <p className="text-white/90 mb-4">
          Contact support on Discord.
        </p>
      </div>
    </main>
  );
}
