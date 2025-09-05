'use client';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Directive Sirius respects your privacy. This policy explains how we collect, use, and protect your personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Data Collection</h2>
        <p className="mb-4">
          We collect only necessary information for account creation, purchase processing, and customer support. We do not sell your data to third-parties.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">2. Usage</h2>
        <p className="mb-4">
          Your information is used to deliver products, communicate important updates, and provide support.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">3. Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your data. However, no system is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Third-Party Services</h2>
        <p className="mb-4">
          Some services (e.g., payment processors) may collect data separately. Please refer to their privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">5. Changes</h2>
        <p className="mb-4">
          We may update this policy. Changes will be posted on our website and effective immediately.
        </p>
      </div>
    </main>
  );
}
