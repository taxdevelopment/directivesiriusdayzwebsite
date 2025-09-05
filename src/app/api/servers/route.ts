import { NextResponse } from 'next/server';
import Gamedig from 'gamedig';

const SERVERS = [
  { id: 'server1', name: 'Directive DayZ Server US1', host: 'N/A', port: 2302 },
  { id: 'server2', name: 'Directive DayZ Server US2', host: 'N/A', port: 2302 },
];

export async function GET() {
  const results = await Promise.all(
    SERVERS.map(async (s) => {
      try {
        const state = await Gamedig.query({
          type: 'dayz',
          host: s.host,
          port: s.port,
        });
        return {
          ...s,
          online: true,
          players: { current: state.players.length, max: state.maxplayers },
        };
      } catch (err) {
        return { ...s, online: false, players: { current: 0, max: 0 } };
      }
    })
  );

  return NextResponse.json(results);
}
