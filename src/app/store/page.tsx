import { config } from '../../../config';

export default function StorePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-4">
      <h1 className="text-4xl font-bold mb-4">Store - {config.site.title}</h1>
      <p className="text-lg mb-6">
        Welcome to the Directive Sirius Store! Here you can find exclusive items, merch, and more.
      </p>
    </main>
  );
}
