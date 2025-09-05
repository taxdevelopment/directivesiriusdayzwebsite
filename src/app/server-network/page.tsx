// app/server-network/page.tsx
'use client';

import React from 'react';
import ServerNetworkPopSection from '@/sections/server-network-pop-section';

export default function ServerNetworkPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center pt-24 px-4">
      {/* Full-page background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/bg2.png)' }}
      />
      <div className="fixed inset-0 bg-purple-950/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 py-12">
        <ServerNetworkPopSection />
      </div>
    </main>
  );
}
