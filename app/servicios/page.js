export const metadata = {
  title: 'Servicios',
  description: 'Conoce nuestros servicios',
  openGraph: {
    title: 'Servicios - Furnirent',
    description: 'Conoce nuestros servicios',
    url: 'https://example.com/servicios',
    siteName: 'Furnirent',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Servicios() {
  return (
    <section aria-labelledby="servicios-title" className="py-10">
      <h1 id="servicios-title" className="text-2xl font-bold mb-4">Servicios</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>Diseño personalizado</li>
        <li>Entrega a domicilio</li>
        <li>Asesoría de decoración</li>
      </ul>
    </section>
  );
}
