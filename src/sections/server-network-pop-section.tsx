'use client';

import { useState, useEffect } from 'react';
import { Server as ServerIcon, CheckCircle, XCircle } from 'lucide-react';

export interface ServerData {
  id: string;
  name: string;
  host: string;
  port?: number;
  online: boolean;
  players?: { current: number; max: number };
}

export default function ServerNetworkPage() {
  const [servers, setServers] = useState<ServerData[]>([]);
  const refreshInterval = 30000;

  const fetchServers = async () => {
    try {
      const res = await fetch('/api/servers');
      const data: ServerData[] = await res.json();
      setServers(data);
    } catch (err) {
      console.error('Error fetching servers:', err);
    }
  };

  useEffect(() => {
    fetchServers();
    const interval = setInterval(fetchServers, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return (
    <main className="relative flex flex-col min-h-screen pt-24 px-4">

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Server Status</h2>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {servers.map((server) => (
            <div
              key={server.id}
              className="rounded-2xl p-6 shadow bg-neutral-900/80 border border-neutral-800 flex flex-col items-center"
            >
              <ServerIcon className="h-10 w-10 mb-4 text-brand-light" />
              <h3 className="text-2xl font-bold text-center mb-1 text-white">{server.name}</h3>
              <p className="text-sm text-neutral-400 mb-2">
                {server.host}{server.port ? `:${server.port}` : ''}
              </p>
              <div className="flex items-center gap-2 mb-2">
                {server.online ? (
                  <CheckCircle className="text-green-500 w-6 h-6" />
                ) : (
                  <XCircle className="text-red-500 w-6 h-6" />
                )}
                <span className="text-white font-medium">
                  {server.online ? 'Online' : 'Offline'}
                </span>
              </div>
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
      </div>

      {/* Footer wird automatisch vom RootLayout gerendert */}
    </main>
  );
}
