import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: {
    default: 'Furnirent',
    template: '%s | Furnirent',
  },
  description: 'Servicios de muebles y decoración.',
  openGraph: {
    title: 'Furnirent',
    description: 'Servicios de muebles y decoración.',
    url: 'https://example.com',
    siteName: 'Furnirent',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 p-4 container mx-auto">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          © {new Date().getFullYear()} Furnirent
        </footer>
      </body>
    </html>
  );
}
