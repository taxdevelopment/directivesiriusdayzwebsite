import { NextResponse } from 'next/server';
import { query as steamQuery } from 'gamedig'; // Gamedig funktioniert auch für DayZ

export async function GET() {
  const servers = [
    { id: '1', name: 'Directive Sirius US1', ip: 'N/A', port: 2302 },
    { id: '2', name: 'Directive Sirius US2', ip: 'N/A', port: 2302 },
  ];

  const results = await Promise.all(
    servers.map(async (s) => {
      try {
        const status = await steamQuery.query({
          type: 'dayz',
          host: s.ip,
          port: s.port,
        });

        return {
          ...s,
          status: 'online',
          players: status.players.length,
          maxPlayers: status.maxplayers,
        };
      } catch {
        return { ...s, status: 'offline', players: 0, maxPlayers: 0 };
      }
    })
  );

  return NextResponse.json(results);
}
