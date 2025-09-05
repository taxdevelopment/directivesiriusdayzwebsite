'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Server } from 'lucide-react';

interface ServerData {
  host: string;
  port?: number;
  type: string;
  online: boolean;
  players?: any[];
}

export default function ServerNetworkPopSection() {
  const [servers, setServers] = useState<ServerData[]>([]);
  const refreshInterval = 30000; // 30 seconds

  const fetchServers = async () => {
    try {
      const res = await fetch('/api/servers');
      const data: ServerData[] = await res.json();
      setServers(data);
    } catch (err) {
      console.error('Failed to fetch servers:', err);
    }
  };

  useEffect(() => {
    fetchServers(); // initial fetch
    const interval = setInterval(fetchServers, refreshInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 max-w-6xl w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Server Status</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servers.map((server) => (
          <div
            key={`${server.host}:${server.port}`}
            className="rounded-2xl p-6 shadow bg-neutral-900 border border-neutral-800 flex flex-col items-center"
          >
            <Server className="h-10 w-10 mb-4 text-brand-light" />
            <h3 className="text-2xl font-bold text-center mb-2">{server.host}</h3>
            <p className="text-sm text-neutral-400 mb-4">
              {server.online ? 'Online' : 'Offline'}
            </p>
            <div className="flex items-center gap-2 mb-4">
              {server.online ? (
                <CheckCircle className="text-green-500 w-6 h-6" />
              ) : (
                <XCircle className="text-red-500 w-6 h-6" />
              )}
              <span className="text-white font-medium">
                {server.online ? `${server.players?.length || 0} Players` : '0 Players'}
              </span>
            </div>
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
