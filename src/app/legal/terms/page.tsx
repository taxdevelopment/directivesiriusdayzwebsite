'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-purple-900/40" />

      <div className="relative max-w-4xl mx-auto px-4 py-24 text-neutral-100">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Directive Sirius (hereinafter
              referred to as &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) through the
              website directivesirius.gg (the &quot;Site&quot;), you agree to comply with and
              be bound by the following terms and conditions (the &quot;Terms of Service&quot;).
              If you do not agree to these terms, please refrain from using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">VIP Services</h2>
            <p>
              Directive Sirius offers VIP services that provide users with enhanced features,
              including expedited access to the server. By purchasing VIP, you acknowledge and
              agree to the terms outlined in this document.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Payments and Refunds</h2>
            <p>
              All payments for VIP services are non-refundable. Once a purchase is made,
              users will receive immediate access to the virtual benefits associated with
              their VIP status. Refunds will not be issued under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Access to VIP Benefits</h2>
            <p>
              Upon successful payment, users will gain access to VIP benefits, including
              priority queue status on the server. It is the user&apos;s responsibility to
              familiarize themselves with the specific benefits associated with their VIP status.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Termination of VIP Services</h2>
            <p>
              Directive Sirius reserves the right to terminate or suspend VIP services for users
              who violate our terms or engage in any form of misconduct. Termination of services
              will be at our discretion, and no refunds will be issued.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Changes to Terms of Service</h2>
            <p>
              We reserve the right to modify or update these Terms of Service at any time.
              Users will be notified of changes, and continued use of our services after such
              modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws
              of the United Kingdom. Any disputes arising from or in connection with these terms
              will be subject to the exclusive jurisdiction of the courts of the United Kingdom.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p>
              For any inquiries or concerns regarding these Terms of Service, please make a
              ticket on our Discord or contact us at info@directivesirius.gg.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
