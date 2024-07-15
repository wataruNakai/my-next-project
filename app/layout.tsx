import "./globals.css";
import Header from "./_components/Header";
import Fotter from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Fotter />
      </body>
    </html>
  );
}
