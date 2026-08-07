import SearchBar from "@/components/SearchBar";
import PromotionCard from "@/components/PromotionCard";

export default function Passagens() {
  return (
    <main>

      <section className="bg-blue-600 text-white py-16 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Passagens Aéreas
        </h1>

        <p className="mt-4 text-lg">
          Encontre voos e promoções para viajar pelo Brasil e pelo mundo.
        </p>

      </section>


      <section className="p-8">

        <SearchBar />

      </section>


      <section className="p-8">

        <h2 className="text-3xl font-bold mb-6">
          Melhores ofertas de passagens
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          <PromotionCard
            title="Belo Horizonte → Salvador"
            description="Passagens promocionais para aproveitar as praias da Bahia."
          />


          <PromotionCard
            title="São Paulo → Rio de Janeiro"
            description="Viaje rápido entre os destinos mais famosos do Brasil."
          />


          <PromotionCard
            title="Brasil → Europa"
            description="Confira oportunidades para sua viagem internacional."
          />

        </div>

      </section>

    </main>
  );
}
