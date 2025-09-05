'use client';

import { useState, useEffect } from 'react';

export interface Server {
  id: string;
  name: string;
  ip: string;
  port: number;
  status: 'online' | 'offline';
  players: number;
  maxPlayers: number;
}

export function useServerStatus(refreshInterval = 30000) {
  const [servers, setServers] = useState<Server[]>([]);

  const fetchStatuses = async () => {
    try {
      const res = await fetch('/api/servers');
      const data: Server[] = await res.json();
      setServers(data);
    } catch (err) {
      console.error('Failed to fetch servers', err);
    }
  };

  useEffect(() => {
    fetchStatuses();
    const interval = setInterval(fetchStatuses, refreshInterval);
    return () => clearInterval(interval);
  }, []);

  return servers;
}
