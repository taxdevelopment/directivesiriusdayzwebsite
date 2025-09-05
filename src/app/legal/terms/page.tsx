'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-900 flex items-start justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-neutral-800 px-8 py-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">
          Welcome to our server store. By accessing or using our services, you agree
          to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Purchases</h2>
        <p className="mb-4">
          All purchases are final unless otherwise stated. Perks and skins are applied
          instantly upon payment. Refunds may only be granted at the discretion of the
          server administration.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">User Conduct</h2>
        <p className="mb-4">
          Users must not abuse the store, exploit glitches, or attempt unauthorized
          access. Violations may result in suspension or banning from server services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content, images, and digital goods sold are the property of the server
          or its licensors. You may not redistribute or claim ownership of purchased
          items.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Changes</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms of Service at any time. Users
          are encouraged to review these terms regularly.
        </p>
      </div>
    </main>
  );
}
