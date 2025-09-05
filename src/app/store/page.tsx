'use client';

import { useState } from 'react';
import { Zap, Sparkle, Brush } from 'lucide-react';

const products = [
  {
    id: 'priority-1m',
    name: 'Priority Queue 1 Month',
    badge: 'Priority',
    price: 14.99,
    features: ['Priority queue access (30 days)', 'Instant delivery'],
    icon: Zap,
  },
  {
    id: 'priority-3m',
    name: 'Priority Queue 3 Month',
    badge: 'Priority',
    price: 39.99,
    features: ['Priority queue access (90 days)', 'Instant delivery'],
    icon: Zap,
  },
  {
    id: 'vip-lifetime',
    name: 'VIP Lifetime',
    badge: 'VIP',
    price: 69.99,
    features: ['Lifetime VIP access', 'VIP Discord role', 'Instant delivery'],
    icon: Sparkle,
    popular: true,
  },
  {
    id: 'custom-weapon-skin',
    name: 'Custom Weapon Skin',
    badge: 'Skin',
    price: 24.99,
    features: ['PLEASE OPEN TICKET BEFORE PURCHASE', 'Custom Weapon Skin'],
    icon: Brush,
  },
  {
    id: 'custom-vehicle-skin',
    name: 'Custom Vehicle Skin',
    badge: 'Skin',
    price: 24.99,
    features: ['PLEASE OPEN TICKET BEFORE PURCHASE', 'Custom Vehicle Skin'],
    icon: Brush,
  },
  {
    id: 'custom-sleeping-bag',
    name: 'Custom Sleeping Bag',
    badge: 'Skin',
    price: 14.99,
    features: ['PLEASE OPEN TICKET BEFORE PURCHASE', 'Custom Sleeping Bag'],
    icon: Brush,
  },
  {
    id: 'custom-clan-tag',
    name: 'Custom Clan Tag Color',
    badge: 'Misc',
    price: 9.99,
    features: ['Custom Clan Tag Color', 'Redeemable in-game'],
    icon: Brush,
  },
  {
    id: 'custom-killfeed-color',
    name: 'Custom Killfeed Color',
    badge: 'Misc',
    price: 9.99,
    features: ['Custom Killfeed Color', 'Redeemable in-game'],
    icon: Brush,
  },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'priority' | 'vip' | 'skins' | 'misc'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'priority') return p.badge === 'Priority';
    if (activeTab === 'vip') return p.badge === 'VIP';
    if (activeTab === 'skins') return p.badge === 'Skin';
    if (activeTab === 'misc') return p.badge === 'Misc';
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
        style={{ backgroundImage: 'url(/images/bg.png)' }}
      />
      <div className="fixed inset-0 bg-purple-950/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Support the Server. Get Perks.</h1>
          <p className="text-neutral-200">
            Buy VIP, priority, or skins. Every purchase helps keep the server running.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'priority', 'vip', 'skins', 'misc'].map((tab) => (
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
            <div
              key={p.id}
              className={`rounded-2xl p-6 shadow bg-neutral-900 border ${
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
        <div className="mt-2 text-xs text-neutral-500">
          Directive Sirius is not affiliated with Bohemia Interactive.
        </div>
      </footer>
    </main>
  );
}
