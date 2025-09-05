'use client';

import React from 'react';
import ServerNetworkPopSection from '@/sections/server-network-pop-section';

export default function ServerNetworkPage() {
  return (
    <main className="relative flex-1 w-full flex flex-col items-center pt-24">
      {/* Full-page background */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: 'url(/images/bg2.png)' }}
      />
      <div className="fixed inset-0 bg-purple-950/50 -z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-12">
        <ServerNetworkPopSection />
      </div>
    </main>
  );
}
