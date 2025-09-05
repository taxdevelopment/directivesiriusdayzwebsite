'use client';

import { useState } from 'react';
import { Zap, Gift } from 'lucide-react';

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
    id: 'prio-lifetime',
    name: 'Lifetime VIP',
    badge: 'Lifetime',
    price: 149.99,
    features: [
      'Lifetime VIP access',
      'VIP Discord role',
      'Instant delivery',
    ],
    icon: Zap,
  },
  {
    id: 'skin-1',
    name: 'Custom Weapon Skin',
    badge: 'Skin',
    price: 19.99,
    features: ['Custom weapon skin', 'Redeemable in-game', 'No expiry'],
    icon: Gift,
  },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'priority' | 'vip' | 'skins'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'priority') return p.name.includes('Priority');
    if (activeTab === 'vip') return p.name.includes('VIP');
    if (activeTab === 'skins') return p.name.includes('Skin');
    return true;
  });

  const handleCheckout = (productId: string) => {
    alert(`Pretend checkout for ${productId}. Integrate Stripe/PayPal later.`);
  };

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
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        {/* Header */}
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl font-bold mb-2 text-white">Support the Server. Get Perks.</h1>
          <p className="text-white/90">
            Buy queue priority, VIP, or custom skins. Every purchase helps keep the server running.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'priority', 'vip', 'skins'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-2xl font-medium transition ${
                activeTab === tab ? 'bg-purple-700 text-white shadow' : 'bg-neutral-800 hover:bg-neutral-700 text-white/90'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Products */}
        <section className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl p-6 shadow bg-neutral-900 border border-neutral-800 flex flex-col items-center text-center"
            >
              <p.icon className="h-10 w-10 mb-4 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">{p.name}</h2>
              <p className="text-sm text-white/60 mb-2">{p.badge}</p>
              <p className="text-3xl font-extrabold mb-4 text-white">${p.price}</p>
              <ul className="mb-4 space-y-1 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(p.id)}
                className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
