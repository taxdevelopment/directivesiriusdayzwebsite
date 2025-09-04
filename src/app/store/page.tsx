import { config } from '../../config';

export default function StorePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-4">
      <h1 className="text-4xl font-bold mb-4">Store</h1>
      <p className="text-lg mb-6">
        Welcome to the Directive Sirius Store! Here you can find exclusive items, merch, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example items */}
        <div className="border p-4 rounded shadow">
          <h2 className="font-semibold text-xl">T-Shirt</h2>
          <p className="mt-2">Directive Sirius Community T-Shirt.</p>
          <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
            Buy Now
          </button>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="font-semibold text-xl">In-Game Item</h2>
          <p className="mt-2">Exclusive in-game DayZ item.</p>
          <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
