'use client';

import React from 'react';
import { config } from '../../../config';
import { getServerLeaderboards, LeaderboardEntry } from '@/lib/cftools';
import LeaderboardSection from '@/sections/leaderboard-section';

export default async function LeaderboardPage() {
  // Lade Daten nur, wenn Leaderboard aktiviert ist
  let data = config.cftools.leaderboard.enabled ? await getServerLeaderboards() : {};
  let error = 'error' in data ? (data.error as string) : null;
  if (error) data = {};

  return (
    <main className="relative flex-1 w-full flex flex-col items-center pt-24">
      {/* Full-page background */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: 'url(/images/bg3.png)' }}
      />
      <div className="fixed inset-0 bg-purple-950/75 -z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-12">
        <LeaderboardSection data={data as { [k: string]: LeaderboardEntry[] }} error={error} />
      </div>
    </main>
  );
}
