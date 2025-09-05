'use client';

export default function FulfillmentPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 flex items-start justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-neutral-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Fulfillment Policy</h1>
        <p className="mb-4">
          This policy explains how purchases are fulfilled for your convenience and
          transparency.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Delivery</h2>
        <p className="mb-4">
          All perks, priority access, and skins are delivered instantly after
          successful payment. Delivery occurs automatically through the server system.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Custom Requests</h2>
        <p className="mb-4">
          Custom skins may require submission of additional information. These will
          be delivered within a reasonable timeframe agreed upon during purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Issues & Support</h2>
        <p className="mb-4">
          If a perk or skin is not delivered, please contact support immediately. We
          will investigate and resolve fulfillment issues as quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Limitations</h2>
        <p className="mb-4">
          We are not responsible for account misconfiguration or misuse by the user.
          Make sure all information provided is correct to ensure proper fulfillment.
        </p>
      </div>
    </main>
  );
}
