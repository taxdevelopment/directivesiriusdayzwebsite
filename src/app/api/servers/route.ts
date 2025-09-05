import { NextResponse } from 'next/server';
import { query as gamedigQuery } from 'gamedig';

export async function GET() {
  const servers = [
    { host: 'YOUR_SERVER_IP', port: 2302, type: 'dayz' },
    // weitere Server hier
  ];

  const results = await Promise.all(
    servers.map(async (server) => {
      try {
        const data = await gamedigQuery({
          type: server.type,
          host: server.host,
          port: server.port,
        });
        return { ...server, online: true, players: data.players };
      } catch (err) {
        return { ...server, online: false, players: [] };
      }
    })
  );

  return NextResponse.json(results);
}
