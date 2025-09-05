'use client';

export default function FulfillmentPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center pt-24 px-4">
      {/* Full-page background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="fixed inset-0 bg-purple-900/30 z-0" />

      <div className="relative max-w-4xl mx-auto px-4 py-24 text-neutral-100">
        <h1 className="text-4xl font-bold mb-6 text-center">Fulfillment Policy</h1>

        <section className="space-y-6">
          <div>
            <p>
              Thank you for choosing Directive Sirius for your virtual products. Our commitment
              is to swiftly deliver your orders and ensure your satisfaction. Please review our
              fulfillment policy below for more details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Order Fulfillment Time</h2>
            <p>
              Our virtual products are processed and delivered to you almost instantly,
              typically within 10 minutes from the moment of purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Delivery Process</h2>
            <p>
              As our offerings are virtual, there are no traditional shipping methods or
              delivery times. Your virtual item will be accessible within approximately 10
              minutes after your purchase is confirmed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Cancellation and Refund Policy</h2>
            <p>
              Due to the rapid processing and delivery of our virtual products (within 10
              minutes), we do not accept order cancellations or offer refunds. However, we are
              here to assist you. If you require further assistance or have inquiries, please
              reach out to us through our Discord Support.
            </p>
          </div>

          <div>
            <p className="mt-4">
              Thank you for your understanding and choosing Directive Sirius for your virtual
              products.
            </p>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-4 py-12 text-center text-neutral-200">
        <p>Directive Sirius Community &copy; {new Date().getFullYear()}</p>
        <div className="space-x-4 mt-2">
          <a href="/legal/terms" className="hover:underline">Terms of Service</a>
          <a href="/legal/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/legal/fulfillment" className="hover:underline">Fulfillment Policy</a>
        </div>
      </footer>
    </main>
  );
}
