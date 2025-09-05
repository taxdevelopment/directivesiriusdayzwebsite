'use client';

import { useState } from 'react';
import { Zap, Palette } from 'lucide-react';

// Product data
const products = [
  {
    id: 'prio-1',
    name: 'Priority Queue',
    badge: '1 Month',
    price: 14.99,
    features: [
      'Priority queue access (30 days)',
      'VIP Discord role',
      'Instant delivery',
    ],
    icon: Zap,
  },
  {
    id: 'prio-3',
    name: 'Priority Queue',
    badge: '3 Months',
    price: 39.99,
    features: [
      'Priority queue access (90 days)',
      'VIP Discord role',
      'Instant delivery',
    ],
    popular: true,
    icon: Zap,
  },
  {
    id: 'skin-custom-weapon',
    name: 'Custom Weapon Skin',
    badge: 'Skin',
    price: 24.99,
    features: [
      'Unique custom weapon skin',
      'Personalized design',
      'Open Ticket before Purchase!',
    ],
    icon: Palette,
  },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'priority' | 'skins'>(
    'all'
  );

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'priority') return p.name.includes('Priority');
    if (activeTab === 'skins') return p.name.includes('Skin');
    return true;
  });

  const handleCheckout = (productId: string) => {
    alert(`Pretend checkout for ${productId}. Integrate Stripe/PayPal later.`);
  };

  return (
    <main
      className="relative min-h-screen w-full flex flex-col bg-cover bg-center text-neutral-100"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex-1">
        {/* Hero */}
        <section className="text-center py-12 px-4">
          <img
            src="/images/logo.png"
            alt="Server Logo"
            className="mx-auto h-16 mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">
            Support the Server. Get Perks.
          </h1>
          <p className="text-neutral-300">
            Buy queue priority or unlock custom skins. Every purchase helps keep
            the server running.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'priority', 'skins'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-2xl font-medium transition ${
                activeTab === tab
                  ? 'bg-brand text-white shadow'
                  : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              {tab === 'all'
                ? 'All'
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Products */}
        <section className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl p-6 shadow bg-neutral-900/90 border ${
                p.popular ? 'border-brand-light' : 'border-neutral-800'
              }`}
            >
              <p.icon className="h-10 w-10 mb-4 text-brand-light" />
              <h2 className="text-2xl font-bold">{p.name}</h2>
              <p className="text-sm text-neutral-400 mb-2">{p.badge}</p>
              <p className="text-3xl font-extrabold mb-4">${p.price}</p>
              <ul className="mb-4 space-y-1 text-sm text-neutral-300">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(p.id)}
                className="w-full py-2 rounded-xl bg-brand hover:bg-brand-light text-white font-semibold transition"
              >
                {p.popular ? 'Most Popular' : 'Buy Now'}
              </button>
            </div>
          ))}
        </section>

        {/* FAQ + Terms */}
        <section className="max-w-3xl mx-auto mt-16 px-4 pb-12">
          <h3 className="text-2xl font-bold mb-6">FAQ</h3>
          <div className="space-y-4 text-neutral-300">
            <div>
              <h4 className="font-semibold">How fast is delivery?</h4>
              <p>Perks and skins are applied instantly after payment.</p>
            </div>
            <div>
              <h4 className="font-semibold">Do I get a Discord role?</h4>
              <p>Yes, you’ll automatically get a VIP role after purchase.</p>
            </div>
            <div>
              <h4 className="font-semibold">Can I request a custom design?</h4>
              <p>
                For skins, yes! You can submit a custom design request after
                purchase.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-neutral-500 space-x-4">
            <a href="/legal/terms" className="hover:text-neutral-300">
              Terms of Service
            </a>
            <a href="/legal/privacy" className="hover:text-neutral-300">
              Privacy Policy
            </a>
            <a href="/legal/fulfillment" className="hover:text-neutral-300">
              Fulfillment Policy
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
