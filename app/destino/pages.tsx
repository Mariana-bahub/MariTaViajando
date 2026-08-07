import DestinationCard from "@/components/DestinationCard";

export default function Destinos() {
  const destinos = [
    {
      title: "Fernando de Noronha",
      image: "/images/destinos/noronha.jpg",
      description:
        "Praias paradisíacas, águas cristalinas e uma experiência inesquecível."
    },
    {
      title: "Rio de Janeiro",
      image: "/images/destinos/rio.jpg",
      description:
        "Conheça o Cristo Redentor, praias famosas e paisagens incríveis."
    },
    {
      title: "Gramado",
      image: "/images/destinos/gramado.jpg",
      description:
        "Clima europeu, gastronomia e atrações para toda família."
    },
    {
      title: "Salvador",
      image: "/images/destinos/salvador.jpg",
      description:
        "Cultura, história, praias e muita energia baiana."
    },
    {
      title: "Foz do Iguaçu",
      image: "/images/destinos/foz.jpg",
      description:
        "Veja uma das maiores maravilhas naturais do mundo."
    },
    {
      title: "Maceió",
      image: "/images/destinos/maceio.jpg",
      description:
        "Mar azul, piscinas naturais e praias incríveis."
    }
  ];

  return (
    <main className="p-8">

      <section className="text-center mb-10">

        <h1 className="text-4xl font-bold">
          Destinos
        </h1>

        <p className="mt-4 text-gray-600">
          Explore lugares incríveis para sua próxima viagem.
        </p>

      </section>


      <section className="grid md:grid-cols-3 gap-8">

        {destinos.map((destino) => (
          <DestinationCard
            key={destino.title}
            title={destino.title}
            image={destino.image}
            description={destino.description}
          />
        ))}

      </section>

    </main>
  );
}
