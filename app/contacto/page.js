export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros',
  openGraph: {
    title: 'Contacto - Furnirent',
    description: 'Ponte en contacto con nosotros',
    url: 'https://example.com/contacto',
    siteName: 'Furnirent',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Contacto() {
  return (
    <section aria-labelledby="contacto-title" className="py-10">
      <h1 id="contacto-title" className="text-2xl font-bold mb-4">Contacto</h1>
      <form
        action="/api/contact"
        method="post"
        className="grid gap-4 max-w-md"
        aria-label="Formulario de contacto"
      >
        <label htmlFor="name" className="flex flex-col">
          Nombre
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border p-2"
          />
        </label>
        <label htmlFor="email" className="flex flex-col">
          Correo
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border p-2"
          />
        </label>
        <label htmlFor="message" className="flex flex-col">
          Mensaje
          <textarea
            id="message"
            name="message"
            required
            className="border p-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 w-fit"
          aria-label="Enviar formulario"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
