import { useServerStatus } from '@/lib/serverspop';

export default function ServerNetworkPopSection() {
  const servers = useServerStatus();

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-24 px-4">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="fixed inset-0 bg-purple-900/30 z-0" />

      <div className="relative z-10 max-w-6xl w-full px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((s) => (
          <div
            key={s.id}
            className="p-6 rounded-2xl border shadow bg-neutral-900 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-white">{s.name}</h2>
              <p className="text-sm text-neutral-400">{s.ip}:{s.port}</p>
              <p className="text-sm text-neutral-300">
                Players: {s.players}/{s.maxPlayers}
              </p>
            </div>
            <div
              className={`w-4 h-4 rounded-full mt-4 ${
                s.status === 'online' ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
