'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Server as ServerIcon } from 'lucide-react';

export interface ServerData {
  id: string;         // Unique server id
  name: string;       // Server name
  host: string;       // IP
  port?: number;      // Port (optional)
  online: boolean;    // Online status
  players?: { current: number; max: number };
}

export default function ServerNetworkPopSection() {
  const [servers, setServers] = useState<ServerData[]>([]);
  const refreshInterval = 30000; // 30 seconds

  const fetchServers = async () => {
    try {
      const res = await fetch('/api/servers'); // This endpoint should return your servers with live online/player info
      if (!res.ok) throw new Error('Failed to fetch servers');
      const data: ServerData[] = await res.json();
      setServers(data);
    } catch (err) {
      console.error('Error fetching servers:', err);
    }
  };

  useEffect(() => {
    fetchServers(); // Initial fetch
    const interval = setInterval(fetchServers, refreshInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 max-w-6xl w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Server Status</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servers.map((server) => (
          <div
            key={server.id}
            className="rounded-2xl p-6 shadow bg-neutral-900 border border-neutral-800 flex flex-col items-center"
          >
            <ServerIcon className="h-10 w-10 mb-4 text-brand-light" />
            <h3 className="text-2xl font-bold text-center mb-1">{server.name}</h3>
            <p className="text-sm text-neutral-400 mb-2">
              {server.host}{server.port ? `:${server.port}` : ''}
            </p>
            <p className="text-sm text-neutral-300 mb-4">
              Players: {server.players?.current ?? 0} / {server.players?.max ?? 0}
            </p>
            <button
              className={`w-full py-2 rounded-xl text-white font-semibold transition ${
                server.online ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 cursor-not-allowed'
              }`}
              disabled={!server.online}
            >
              {server.online ? 'Join Server' : 'Offline'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
