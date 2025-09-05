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

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Effective Date: 10-11-2024</h2>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">1. Order Fulfillment</h2>
        <p className="text-white/90 mb-4">
          All purchases of virtual products, including VIP access, custom skins, and in-game items, are fulfilled digitally. Delivery is generally instant, typically within 10 minutes of purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">2. Delivery Process</h2>
        <p className="text-white/90 mb-4">
          Once your payment is confirmed, your virtual items or VIP privileges are applied automatically to your account. No physical shipping is involved.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">3. Refunds and Cancellations</h2>
        <p className="text-white/90 mb-4">
          Due to the immediate delivery of digital goods, we do not offer cancellations or refunds once the purchase is completed. Please ensure your purchase details are correct before confirming your order.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">4. Customer Support</h2>
        <p className="text-white/90 mb-4">
          If you encounter issues with your purchase or do not receive your items within the expected time frame, please submit a support ticket on our Discord. Our team will assist you promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">5. Payment Verification</h2>
        <p className="text-white/90 mb-4">
          Orders are processed after successful verification of payment through supported platforms like Stripe or PayPal. Any failed transactions will not result in access to purchased services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">6. Contact Information</h2>
        <p className="text-white/90 mb-4">
          For any inquiries regarding fulfillment of your orders, please create a support ticket on our Discord or contact us at <a href="mailto:[email protected]" className="text-blue-400">[email protected]</a>.
        </p>
      </div>
    </main>
  );
}
