import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mari Tá Viajando",
  description:
    "Descubra destinos, promoções de viagens, hotéis e dicas para sua próxima aventura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
