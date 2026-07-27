export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #2563EB, #06B6D4)",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          ✈️ Mari Tá Viajando
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Descubra passagens promocionais, hotéis, bate-voltas,
          destinos incríveis e dicas para viajar gastando menos.
        </p>

        <button
          style={{
            marginTop: "30px",
            background: "#FBBF24",
            color: "#111",
            border: "none",
            padding: "15px 35px",
            borderRadius: "30px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explorar Destinos
        </button>
      </section>

      {/* Categorias */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          O que você procura?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          <div>✈️ Passagens</div>
          <div>🏨 Hotéis</div>
          <div>🌍 Destinos</div>
          <div>🚗 Bate-voltas</div>
          <div>💰 Promoções</div>
        </div>
      </section>
    </main>
  );
}
