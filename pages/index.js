import Link from 'next/link';
export default function Home() {
  return (
    <div className="bg-benniBlack min-h-screen text-white">
      <header className="p-5 flex justify-between items-center border-b border-benniYellow">
        <h1 className="text-2xl font-bold">BenniBlog</h1>
        <nav>
          <Link href="/fliegen" className="mx-3 hover:text-benniYellow">Fliegen</Link>
          <Link href="/reallife" className="mx-3 hover:text-benniYellow">Real Life</Link>
          <Link href="/gaming" className="mx-3 hover:text-benniYellow">Gaming</Link>
        </nav>
      </header>
      <main className="p-5">
        <h2 className="text-xl mb-4">Willkommen zu BenniBlog!</h2>
        <p>Entdecke Beiträge, Fotos und Abstimmungen zu Fliegen, Real Life und Gaming.</p>
        <div className="mt-5">
          <a href="https://ghostskript.com" target="_blank" className="text-benniYellow underline mr-5">Ghostskript</a>
          <a href="https://benni.info" target="_blank" className="text-benniYellow underline">Benni.info</a>
        </div>
      </main>
    </div>
  );
}
