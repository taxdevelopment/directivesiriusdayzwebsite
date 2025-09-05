'use client';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Information We Collect</h2>
        <p className="text-white/90 mb-4">We may collect email, payment details, and usage data...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">How We Use Your Data</h2>
        <p className="text-white/90 mb-4">Your information is used to process transactions...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Third-Party Services</h2>
        <p className="text-white/90 mb-4">We may share minimal information with trusted third-party providers...</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Changes</h2>
        <p className="text-white/90 mb-4">We may update this policy from time to time...</p>
      </div>
    </main>
  );
}
