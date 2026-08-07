import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">


        <div>
          <h2 className="text-2xl font-bold mb-4">
            Mari Tá Viajando
          </h2>

          <p className="text-gray-300">
            Dicas, destinos e inspirações para sua próxima aventura.
          </p>
        </div>


        <div>

          <h3 className="text-xl font-bold mb-4">
            Links rápidos
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <Link href="/destinos">
                Destinos
              </Link>
            </li>

            <li>
              <Link href="/passagens">
                Passagens
              </Link>
            </li>

            <li>
              <Link href="/hoteis">
                Hotéis
              </Link>
            </li>

            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>

          </ul>

        </div>


        <div>

          <h3 className="text-xl font-bold mb-4">
            Contato
          </h3>

          <p className="text-gray-300">
            Email: contato@maritaviajando.com
          </p>

          <p className="text-gray-300 mt-2">
            Siga nossas redes sociais
          </p>

        </div>


      </div>


      <div className="border-t border-gray-700 text-center py-5 text-gray-400">

        © {new Date().getFullYear()} Mari Tá Viajando. Todos os direitos reservados.

      </div>


    </footer>
  );
}
