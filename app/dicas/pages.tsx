import BlogCard from "@/components/BlogCard";

export default function Dicas() {

  const dicas = [
    {
      title: "Como economizar em uma viagem",
      image: "/images/blog/economizar.jpg",
      description:
        "Aprenda maneiras simples de gastar menos e aproveitar mais."
    },
    {
      title: "O que levar na mala de viagem",
      image: "/images/blog/mala.jpg",
      description:
        "Confira uma lista prática para não esquecer nada importante."
    },
    {
      title: "Como escolher um hotel",
      image: "/images/blog/hotel.jpg",
      description:
        "Veja dicas para encontrar uma hospedagem confortável."
    },
    {
      title: "Melhores destinos para férias",
      image: "/images/blog/destinos.jpg",
      description:
        "Conheça lugares incríveis para sua próxima aventura."
    }
  ];


  return (
    <main>

      <section className="bg-blue-600 text-white py-16 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Dicas de Viagem
        </h1>

        <p className="mt-4 text-lg">
          Informações para deixar sua viagem mais fácil e econômica.
        </p>

      </section>


      <section className="p-8">

        <h2 className="text-3xl font-bold mb-8">
          Conteúdos para viajantes
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {dicas.map((dica) => (

            <BlogCard
              key={dica.title}
              title={dica.title}
              image={dica.image}
              description={dica.description}
            />

          ))}

        </div>

      </section>

    </main>
  );
}
