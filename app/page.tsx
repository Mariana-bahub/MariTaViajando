import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import PromotionCard from "@/components/PromotionCard";

export default function Home() {
  return (
    <main>

      <Hero />

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">
          Destinos em destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <DestinationCard
            title="Fernando de Noronha"
            image="/images/destinos/noronha.jpg"
          />

          <DestinationCard
            title="Rio de Janeiro"
            image="/images/destinos/rio.jpg"
          />

          <DestinationCard
            title="Gramado"
            image="/images/destinos/gramado.jpg"
          />

        </div>

      </section>


      <section className="p-8 bg-gray-100">

        <h2 className="text-3xl font-bold mb-6">
          Promoções
        </h2>

        <PromotionCard
          title="Pacotes com até 40% OFF"
          description="Viaje pagando menos."
        />

      </section>

    </main>
  );
}
