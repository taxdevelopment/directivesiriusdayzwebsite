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
      <div className="max-w-4xl w-full px-8 py-12 flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Terms of Service</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Purchases</h2>
        <p className="text-white/90 mb-4">All purchases are final unless otherwise stated...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">User Conduct</h2>
        <p className="text-white/90 mb-4">Users must not abuse the store...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Intellectual Property</h2>
        <p className="text-white/90 mb-4">All content is property of the server...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Changes</h2>
        <p className="text-white/90 mb-4">We reserve the right to modify these Terms...</p>
      </div>
    </main>
  );
}
