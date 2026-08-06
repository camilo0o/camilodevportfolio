import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Camilo Fagundez — Desarrollador",
  description:
    "Portfolio de Camilo Fagundez: Estudiante de Tecnólogo en Informática en UTEC, con experiencia en desarrollo full-stack, aplicaciones móviles y despliegue de infraestructura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white flex flex-col min-h-screen overflow-x-hidden`}
      >
        <div className="code-background"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}