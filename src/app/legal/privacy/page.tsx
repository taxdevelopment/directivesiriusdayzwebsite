'use client';

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center pt-24 px-4">
      {/* Full-page background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="fixed inset-0 bg-purple-900/30 z-0" />

      <div className="relative max-w-4xl mx-auto px-4 py-24 text-neutral-100">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p>
              Welcome to Directive Sirius! This Privacy Policy outlines how we collect,
              use, and protect your information when you visit our website Directive Sirius
              (referred to as the &quot;Site&quot;) and make use of our services. By accessing
              our website and services, you agree to the terms outlined in this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
            <p>We may collect certain information when you visit our website, including:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Personal Information:</strong> When you make a purchase, we collect
                necessary information such as your name, email address, and payment details
                to process your transaction.
              </li>
              <li>
                <strong>Server Access Information:</strong> To facilitate VIP services, we
                collect and store information related to your server access, including your
                in-game username and associated privileges.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Use of Information</h2>
            <p>The information collected is used for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Transaction Processing:</strong> To process purchases and provide the
                VIP services you&apos;ve acquired.
              </li>
              <li>
                <strong>Server Access:</strong> To enable and manage VIP privileges for efficient
                access to the server.
              </li>
              <li>
                <strong>Communication:</strong> To communicate with you regarding your
                transactions, support requests, and important updates related to our services.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Protection of Information</h2>
            <p>
              We prioritize the security of your information and implement appropriate
              measures to protect it from unauthorized access, disclosure, alteration, and
              destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
            <p>
              We do not share your personal information with third parties except for
              essential services required to operate our website and deliver VIP services.
              These services adhere to industry-standard privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy. After this period, the data is
              securely deleted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">User Choices</h2>
            <p>
              You have the option to provide or withhold certain information. However, choosing
              not to provide necessary details may affect your ability to access and enjoy
              our VIP services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Changes to Privacy Policy</h2>
            <p>
              We reserve the right to modify or update this Privacy Policy. Any changes will be
              effective immediately upon posting on the Site. We recommend reviewing this
              policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p>
              For any questions or concerns regarding this Privacy Policy, please make a ticket
              on our Discord.
            </p>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="relative z-10 mt-12 w-full bg-neutral-900/80 text-neutral-300 text-sm py-6 px-4 text-center rounded-t-xl">
        <div className="mb-2">{`© 2025 Directive Sirius. All rights reserved.`}</div>
        <div className="flex justify-center gap-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/legal/terms" className="hover:text-white">Terms of Service</a>
          <a href="/legal/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/legal/fulfillment" className="hover:text-white">Fulfillment Policy</a>
        </div>
        <div className="mt-2 text-xs text-neutral-500">Directive Sirius is not affiliated with Bohemia Interactive.</div>
      </footer>
    </main>
  );
}
