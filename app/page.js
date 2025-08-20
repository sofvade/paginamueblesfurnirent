export const metadata = {
  title: 'Inicio',
  description: 'Bienvenido a Furnirent',
  openGraph: {
    title: 'Inicio - Furnirent',
    description: 'Bienvenido a Furnirent',
    url: 'https://example.com',
    siteName: 'Furnirent',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Home() {
  return (
    <section className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Furnirent</h1>
      <p>Diseño, confort y calidad en cada pieza.</p>
    </section>
  );
}
