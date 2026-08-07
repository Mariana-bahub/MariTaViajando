export default function Contato() {
  return (
    <main>

      <section className="bg-blue-600 text-white py-16 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Entre em contato
        </h1>

        <p className="mt-4 text-lg">
          Envie sua mensagem, dúvida ou sugestão.
        </p>

      </section>


      <section className="p-8 max-w-xl mx-auto">

        <form className="space-y-5">


          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border p-3 rounded"
          />


          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border p-3 rounded"
          />


          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="w-full border p-3 rounded"
          />


          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Enviar mensagem
          </button>


        </form>

      </section>

    </main>
  );
}
