import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold text-benniYellow">Benni Blog 🚀</h1>
      <p className="mt-4">Kategorien:</p>
      <ul className="space-y-2 mt-4">
        <li><Link href="/fliegen">✈️ Fliegen</Link></li>
        <li><Link href="/real">🌍 Real Life</Link></li>
        <li><Link href="/gaming">🎮 Gaming</Link></li>
      </ul>
      <div className="mt-8">
        <a href="https://ghostskript.com" target="_blank">Ghostskript</a> |{" "}
        <a href="https://benni.info" target="_blank">Benni.info</a>
      </div>
    </main>
  );
}
