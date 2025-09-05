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
      <div className="max-w-4xl w-full px-8 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">Effective Date: 10-11-2024</h2>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">1. Introduction</h2>
        <p className="text-white/90 mb-4">
          Welcome to dayzloaded.gg! This Privacy Policy outlines how we collect, use, and protect your information when you visit our website dayzloaded.gg (referred to as the "Site") and make use of our services. By accessing our website and services, you agree to the terms outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">2. Information We Collect</h2>
        <p className="text-white/90 mb-4">
          We may collect certain information when you visit our website, including:
        </p>
        <ul className="list-disc list-inside text-white/90 mb-4">
          <li><strong>Personal Information:</strong> When you make a purchase, we collect necessary information such as your name, email address, and payment details to process your transaction.</li>
          <li><strong>Server Access Information:</strong> To facilitate VIP services, we collect and store information related to your DayZ server access, including your in-game username and associated privileges.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">3. Use of Information</h2>
        <p className="text-white/90 mb-4">
          The information collected is used for the following purposes:
        </p>
        <ul className="list-disc list-inside text-white/90 mb-4">
          <li><strong>Transaction Processing:</strong> To process purchases and provide the VIP services you've acquired.</li>
          <li><strong>Server Access:</strong> To enable and manage VIP privileges for efficient access to the DayZ server.</li>
          <li><strong>Communication:</strong> To communicate with you regarding your transactions, support requests, and important updates related to our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">4. Protection of Information</h2>
        <p className="text-white/90 mb-4">
          We prioritize the security of your information and implement appropriate measures to protect it from unauthorized access, disclosure, alteration, and destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">5. Third-Party Services</h2>
        <p className="text-white/90 mb-4">
          We do not share your personal information with third parties except for essential services required to operate our website and deliver VIP services. These services adhere to industry-standard privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">6. Data Retention</h2>
        <p className="text-white/90 mb-4">
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy. After this period, the data is securely deleted.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">7. User Choices</h2>
        <p className="text-white/90 mb-4">
          You have the option to provide or withhold certain information. However, choosing not to provide necessary details may affect your ability to access and enjoy our VIP services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">8. Changes to Privacy Policy</h2>
        <p className="text-white/90 mb-4">
          We reserve the right to modify or update this Privacy Policy. Any changes will be effective immediately upon posting on the Site. We recommend reviewing this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">9. Contact Information</h2>
        <p className="text-white/90 mb-4">
          For any questions or concerns regarding this Privacy Policy, please make a ticket on our Discord or contact us at <a href="mailto:[email protected]" className="text-blue-400">[email protected]</a>.
        </p>
      </div>
    </main>
  );
}
