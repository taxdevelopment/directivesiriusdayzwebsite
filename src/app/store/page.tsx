'use client';

import { useState } from 'react';
import { Zap, Gift } from 'lucide-react';

const products = [
  {
    id: 'vip-month',
    name: 'VIP 1 Month',
    badge: 'VIP',
    price: 14.99,
    features: [
      'Priority queue access (30 days)',
      'VIP Discord role',
      'Instant delivery',
    ],
    icon: Zap,
  },
  {
    id: 'vip-lifetime',
    name: 'Lifetime VIP',
    badge: 'VIP',
    price: 149.99,
    features: [
      'Lifetime priority access',
      'VIP Discord role',
      'Instant delivery',
    ],
    icon: Zap,
    popular: true,
  },
  {
    id: 'custom-skin',
    name: 'Custom Weapon Skin',
    badge: 'Skin',
    price: 9.99,
    features: [
      'Redeemable unique weapon skin',
      'No expiry',
    ],
    icon: Gift,
  },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'vip' | 'skins'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'vip') return p.badge === 'VIP';
    if (activeTab === 'skins') return p.badge === 'Skin';
    return true;
  });

  const handleCheckout = (productId: string) => {
    alert(`Pretend checkout for ${productId}. Integrate Stripe/PayPal later.`);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center pt-24 px-4">
      {/* Full-page background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="fixed inset-0 bg-purple-900/30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Support the Server. Get Perks.</h1>
          <p className="text-neutral-200">
            Buy VIP or skins. Every purchase helps keep the server running.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'vip', 'skins'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-2xl font-medium transition ${
                activeTab === tab
                  ? 'bg-brand text-white shadow'
                  : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Products */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <div key={p.id} className={`rounded-2xl p-6 shadow bg-neutral-900 border ${p.popular ? 'border-brand-light' : 'border-neutral-800'}`}>
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
      </div>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-4 py-12 text-center text-neutral-200">
        <p>Directive Sirius Community &copy; 2021 - {new Date().getFullYear()}</p>
        <div className="space-x-4 mt-2">
          <a href="/legal/terms" className="hover:underline">Terms of Service</a>
          <a href="/legal/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/legal/fulfillment" className="hover:underline">Fulfillment Policy</a>
        </div>
      </footer>
    </main>
  );
}
