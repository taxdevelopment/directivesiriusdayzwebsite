'use client';

import { useState } from 'react';
import { Zap, Star, Gift } from 'lucide-react';

const products = [
  { id: 'prio-1', name: 'Priority Queue', badge: '1 Month', price: 14.99, features: ['Priority queue access (30 days)', 'VIP Discord role', 'Instant delivery'], icon: Zap, category: 'priority' },
  { id: 'prio-3', name: 'Priority Queue', badge: '3 Months', price: 39.99, features: ['Priority queue access (90 days)', 'VIP Discord role', 'Instant delivery'], icon: Zap, popular: true, category: 'priority' },
  { id: 'vip-lifetime', name: 'Lifetime VIP', badge: 'VIP', price: 149.99, features: ['Lifetime VIP access', 'VIP Discord role', 'Special perks in-game'], icon: Star, category: 'vip' },
  { id: 'skin-custom-1', name: 'Custom Weapon Skin', badge: 'Skin', price: 24.99, features: ['Custom weapon skin', 'Unique design', 'No expiration'], icon: Gift, category: 'skins' },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'priority' | 'vip' | 'skins'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'priority') return p.category === 'priority';
    if (activeTab === 'vip') return p.category === 'vip';
    if (activeTab === 'skins') return p.category === 'skins';
    return true;
  });

  const handleCheckout = (productId: string) => {
    alert(`Pretend checkout for ${productId}. Integrate Stripe/PayPal later.`);
  };

  return (
      <main className="relative min-h-screen flex flex-col items-center justify-start pt-24 px-4">
      {/* Background image */}
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

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-white">Support the Server. Get Perks.</h1>
        <p className="text-white/90">
          Buy queue priority, VIP access, or custom skins. Every purchase helps keep the server running.
        </p>
      </section>

      <div className="flex justify-center gap-4 mb-8">
        {['all', 'priority', 'vip', 'skins'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded-2xl font-medium transition ${
              activeTab === tab ? 'bg-brand text-white shadow' : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <section className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
    </main>
  );
}
