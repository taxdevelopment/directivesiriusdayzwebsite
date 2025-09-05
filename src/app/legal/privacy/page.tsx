'use client';

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-24 px-4">
      {/* Background image */}
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

      <div className="max-w-4xl w-full px-8 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>

        <p className="text-white/90 mb-4">
          Directive Sirius respects your privacy. This policy explains how we
          collect, use, and protect your personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">
          1. Data Collection
        </h2>
        <p className="text-white/90 mb-4">
          We collect only necessary information for account creation, purchase
          processing, and customer support. We do not sell your data to
          third-parties.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">
          2. Usage
        </h2>
        <p className="text-white/90 mb-4">
          Your information is used to deliver products, communicate important
          updates, and provide support.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">
          3. Security
        </h2>
        <p className="text-white/90 mb-4">
          We implement appropriate security measures to protect your data from
          unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">
          4. Cookies
        </h2>
        <p className="text-white/90 mb-4">
          We use cookies to improve website performance and user experience.
          You can disable cookies via your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">
          5. Changes
        </h2>
        <p className="text-white/90 mb-4">
          We may update this Privacy Policy periodically. Updates will be
          posted on our website.
        </p>

        <p className="text-white/90 mt-6">
          For privacy inquiries, please contact us on Discord.
        </p>
      </div>
    </main>
  );
}
