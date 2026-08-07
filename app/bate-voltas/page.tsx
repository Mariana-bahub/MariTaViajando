import DestinationCard from "@/components/DestinationCard";

export default function BateVoltas() {

  const passeios = [
    {
      title: "Bate-volta para Ouro Preto",
      image: "/images/destinos/ouro-preto.jpg",
      description:
        "Conheça história, arquitetura e cultura em um passeio inesquecível."
    },
    {
      title: "Bate-volta para Inhotim",
      image: "/images/destinos/inhotim.jpg",
      description:
        "Um dos maiores museus a céu aberto do mundo."
    },
    {
      title: "Bate-volta para Capitólio",
      image: "/images/destinos/capitolio.jpg",
      description:
        "Cachoeiras, trilhas e paisagens naturais incríveis."
    },
    {
      title: "Bate-volta para Paraty",
      image: "/images/destinos/paraty.jpg",
      description:
        "Passeie pelo centro histórico e pelas belas praias."
    },
    {
      title: "Bate-volta para Campos do Jordão",
      image: "/images/destinos/campos.jpg",
      description:
        "Clima de montanha e atrações para toda família."
    },
    {
      title: "Bate-volta para Serra do Cipó",
      image: "/images/destinos/serra-cipo.jpg",
      description:
        "Natureza, cachoeiras e aventura em Minas Gerais."
    }
  ];


  return (
    <main>

      <section className="bg-blue-600 text-white py-16 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Bate-voltas
        </h1>

        <p className="mt-4 text-lg">
          Encontre passeios incríveis para fazer em um único dia.
        </p>

      </section>


      <section className="p-8">

        <h2 className="text-3xl font-bold mb-8">
          Passeios próximos e experiências
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {passeios.map((passeio) => (

            <DestinationCard
              key={passeio.title}
              title={passeio.title}
              image={passeio.image}
              description={passeio.description}
            />

          ))}

        </div>

      </section>

    </main>
  );
}
