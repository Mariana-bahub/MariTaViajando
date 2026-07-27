import BlogCard from "@/components/BlogCard";

export default function Blog() {

  const artigos = [
    {
      title: "10 destinos incríveis para conhecer no Brasil",
      slug: "destinos-incriveis-brasil",
      image: "/images/blog/brasil.jpg",
      description:
        "Conheça lugares maravilhosos para sua próxima viagem."
    },
    {
      title: "Como planejar uma viagem gastando pouco",
      slug: "planejar-viagem-barata",
      image: "/images/blog/planejamento.jpg",
      description:
        "Dicas para organizar sua viagem sem pesar no bolso."
    },
    {
      title: "O que fazer antes de viajar",
      slug: "antes-de-viajar",
      image: "/images/blog/checklist.jpg",
      description:
        "Confira tudo que você precisa preparar antes da viagem."
    }
  ];


  return (
    <main>

      <section className="bg-blue-600 text-white py-16 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Blog Mari Tá Viajando
        </h1>

        <p className="mt-4 text-lg">
          Inspirações, dicas e informações para viajantes.
        </p>

      </section>


      <section className="p-8">

        <div className="grid md:grid-cols-3 gap-8">

          {artigos.map((artigo) => (

            <BlogCard
              key={artigo.slug}
              title={artigo.title}
              image={artigo.image}
              description={artigo.description}
              slug={artigo.slug}
            />

          ))}

        </div>

      </section>

    </main>
  );
}
