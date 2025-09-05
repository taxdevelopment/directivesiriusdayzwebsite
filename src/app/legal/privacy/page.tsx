'use client';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          We respect your privacy and are committed to protecting your personal data.
          This policy outlines what information we collect and how it is used.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information Collection</h2>
        <p className="mb-4">
          When you make purchases, we collect payment details, your username, and
          Discord ID if applicable. No sensitive payment info is stored on our servers;
          we use secure third-party payment processors.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Information</h2>
        <p className="mb-4">
          Information is used to deliver perks, manage accounts, communicate about
          purchases, and ensure security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">
          Payments and certain features may use third-party services (e.g., Stripe,
          PayPal). Please review their privacy policies as we are not responsible for
          their data practices.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Users are encouraged to
          review this page periodically.
        </p>
      </div>
    </main>
  );
}
