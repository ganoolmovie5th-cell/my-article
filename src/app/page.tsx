import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di Blog Kami</h1>
      <Link href="/articles" className="text-xl text-blue-600 hover:underline">
        Lihat Semua Artikel
      </Link>
    </div>
  );
}
