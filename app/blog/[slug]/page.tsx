type Props = {
  params: {
    slug: string;
  };
};


const artigos = {
  "destinos-incriveis-brasil": {
    title: "10 destinos incríveis para conhecer no Brasil",
    content:
      "O Brasil possui lugares incríveis, com praias, montanhas e muita cultura."
  },

  "planejar-viagem-barata": {
    title: "Como planejar uma viagem gastando pouco",
    content:
      "Com organização e pesquisa é possível viajar gastando menos."
  },

  "antes-de-viajar": {
    title: "O que fazer antes de viajar",
    content:
      "Faça uma lista, organize documentos e prepare sua mala."
  }
};


export default function Artigo({ params }: Props) {

  const artigo =
    artigos[params.slug as keyof typeof artigos];


  if (!artigo) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">
          Artigo não encontrado
        </h1>
      </main>
    );
  }


  return (
    <main className="p-8 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        {artigo.title}
      </h1>


      <p className="text-lg text-gray-700">
        {artigo.content}
      </p>

    </main>
  );
}
