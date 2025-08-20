import Link from 'next/link';

export default function NavBar() {
  return (
    <nav aria-label="Navegación principal" className="bg-gray-800 text-white p-4">
      <ul className="flex flex-col gap-2 md:flex-row md:gap-4 justify-center">
        <li>
          <Link href="/" className="hover:underline" aria-label="Ir a inicio">Inicio</Link>
        </li>
        <li>
          <Link href="/servicios" className="hover:underline" aria-label="Ver servicios">Servicios</Link>
        </li>
        <li>
          <Link href="/contacto" className="hover:underline" aria-label="Ir a contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
