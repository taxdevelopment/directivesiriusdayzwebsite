'use client';

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to Directive Sirius! By accessing or using our services, you agree to comply with and be bound by these terms. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Use of Services</h2>
        <p className="mb-4">
          You may use our services only for lawful purposes. You agree not to engage in any activity that disrupts or interferes with the services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">2. Purchases</h2>
        <p className="mb-4">
          All digital products, including VIP access and custom skins, are delivered electronically. Refunds are not provided after successful purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">3. User Conduct</h2>
        <p className="mb-4">
          You are responsible for your actions on the server. Harassment, cheating, or misuse of the services may result in account suspension or ban.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Liability</h2>
        <p className="mb-4">
          Directive Sirius is not responsible for any loss, damage, or inconvenience arising from the use of our services. Use them at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">5. Changes</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Updated versions will be posted on our website and will be effective immediately.
        </p>
      </div>
    </main>
  );
}
