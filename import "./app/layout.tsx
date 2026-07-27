import "./globals.css";

export const metadata = {
  title: "Mari Tá Viajando",
  description: "Passagens, hotéis, bate-voltas e dicas de viagem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
