import DestinationCard from "@/components/DestinationCard";

export default function Hoteis() {

  const hoteis = [
    {
      title: "Hotel em Gramado",
      image: "/images/hoteis/gramado.jpg",
      description:
        "Hospedagem confortável perto das principais atrações."
    },
    {
      title: "Resort em Maceió",
      image: "/images/hoteis/maceio.jpg",
      description:
        "Descanse em frente ao mar com muito conforto."
    },
    {
      title: "Hotel no Rio de Janeiro",
      image: "/images/hoteis/rio.jpg",
      description:
        "Fique perto das praias e pontos turísticos."
    },
    {
      title: "Hotel em Salvador",
      image: "/images/hoteis/salvador.jpg",
      description:
        "Conheça a cultura baiana com uma ótima localização."
    },
    {
      title: "Pousada em Fernando de Noronha",
      image: "/images/hoteis/noronha.jpg",
      description:
        "Uma experiência única em um paraíso natural."
    },
    {
      title: "Hotel em Foz do Iguaçu",
      image: "/images/hoteis/foz.jpg",
      description:
        "Hospede-se próximo às Cataratas do Iguaçu."
    }
  ];


  return (
    <main>

      <section className="bg-blue-600 text-white py-16 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Hotéis
        </h1>

        <p className="mt-4 text-lg">
          Encontre hospedagens confortáveis para sua viagem.
        </p>

      </section>


      <section className="p-8">

        <h2 className="text-3xl font-bold mb-8">
          Hospedagens recomendadas
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {hoteis.map((hotel) => (

            <DestinationCard
              key={hotel.title}
              title={hotel.title}
              image={hotel.image}
              description={hotel.description}
            />

          ))}

        </div>

      </section>

    </main>
  );
}
