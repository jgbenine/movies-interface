import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="mx-auto">
        <main>{children}</main>
      </body>
    </html>
  );
}
