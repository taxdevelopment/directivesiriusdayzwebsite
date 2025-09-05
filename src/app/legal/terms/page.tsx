'use client';

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-6 text-white">Terms of Service</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Effective Date: 09-11-2024</h2>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">1. Acceptance of Terms</h2>
        <p className="text-white/90 mb-4">
          By accessing and using the services provided by DayZLoaded (hereinafter referred to as 'we,' 'us,' or 'our') through the website dayzloaded.gg (the 'Site'), you agree to comply with and be bound by the following terms and conditions (the 'Terms of Service'). If you do not agree to these terms, please refrain from using our services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">2. VIP Services</h2>
        <p className="text-white/90 mb-4">
          DayZLoaded offers VIP services that provide users with enhanced features, including expedited access to the DayZ server. By purchasing VIP, you acknowledge and agree to the terms outlined in this document.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">3. Payments and Refunds</h2>
        <p className="text-white/90 mb-4">
          All payments for VIP services are non-refundable. Once a purchase is made, users will receive immediate access to the virtual benefits associated with their VIP status. Refunds will not be issued under any circumstances.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">4. Access to VIP Benefits</h2>
        <p className="text-white/90 mb-4">
          Upon successful payment, users will gain access to VIP benefits, including priority queue status on the DayZ server. It is the user's responsibility to familiarize themselves with the specific benefits associated with their VIP status.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">5. Termination of VIP Services</h2>
        <p className="text-white/90 mb-4">
          DayZLoaded reserves the right to terminate or suspend VIP services for users who violate our terms or engage in any form of misconduct. Termination of services will be at our discretion, and no refunds will be issued.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">6. Changes to Terms of Service</h2>
        <p className="text-white/90 mb-4">
          We reserve the right to modify or update these Terms of Service at any time. Users will be notified of changes, and continued use of our services after such modifications constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">7. Governing Law</h2>
        <p className="text-white/90 mb-4">
          These Terms of Service are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from or in connection with these terms will be subject to the exclusive jurisdiction of the courts of the United Kingdom.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">8. Contact Information</h2>
        <p className="text-white/90 mb-4">
          For any inquiries or concerns regarding these Terms of Service, please make a ticket on our Discord or contact us at <a href="mailto:[email protected]" className="text-blue-400">[email protected]</a>.
        </p>
      </div>
    </main>
  );
}
