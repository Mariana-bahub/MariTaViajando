import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">

      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">


        <Link 
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Mari Tá Viajando
        </Link>


        <div className="flex gap-6 text-gray-700">

          <Link href="/">
            Início
          </Link>

          <Link href="/destinos">
            Destinos
          </Link>

          <Link href="/passagens">
            Passagens
          </Link>

          <Link href="/hoteis">
            Hotéis
          </Link>

          <Link href="/blog">
            Blog
          </Link>

          <Link href="/contato">
            Contato
          </Link>

        </div>


      </nav>

    </header>
  );
}
