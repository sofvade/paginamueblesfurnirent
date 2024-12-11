# paginamueblesfurnirent
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Marca de Muebles</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background-color: #333;
        }
        nav a {
            color: white;
            padding: 1rem;
            text-decoration: none;
        }
        nav a:hover {
            background-color: #575757;
        }
        .hero {
            text-align: center;
            padding: 2rem;
            background: url('fondo-muebles.jpg') no-repeat center center/cover;
            color: white;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .section {
            padding: 2rem;
            text-align: center;
        }
        .productos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .producto {
            border: 1px solid #ddd;
            padding: 1rem;
            border-radius: 8px;
            transition: transform 0.3s;
        }
        .producto img {
            max-width: 100%;
            border-radius: 8px;
        }
        .producto:hover {
            transform: scale(1.05);
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bienvenido a Tu Marca de Muebles</h1>
        <p>Diseño, confort y calidad en cada pieza</p>
    </header>
    
    <nav>
        <a href="#quienes-somos">Quiénes Somos</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
    </nav>

    <section class="hero">
        <h2>Transforma tu hogar con estilo</h2>
        <p>Encuentra los muebles perfectos para cada espacio</p>
    </section>

    <section id="quienes-somos" class="section">
        <h2>Quiénes Somos</h2>
        <p>Somos una empresa apasionada por el diseño y la funcionalidad, creando muebles que se adaptan a tus necesidades y estilo de vida.</p>
    </section>

    <section id="productos" class="section">
        <h2>Productos Destacados</h2>
        <div class="productos">
            <div class="producto">
                <img src="sofa.jpg" alt="Sofá Moderno">
                <h3>Sofá Moderno</h3>
                <p>Comodidad y estilo en un solo lugar.</p>
            </div>
            <div class="producto">
                <img src="mesa.jpg" alt="Mesa de Centro">
                <h3>Mesa de Centro</h3>
                <p>El complemento perfecto para tu sala.</p>
            </div>
            <div class="producto">
                <img src="cama.jpg" alt="Cama Minimalista">
                <h3>Cama Minimalista</h3>
                <p>Diseño elegante para un descanso superior.</p>
            </div>
        </div>
    </section>

    <section id="contacto" class="section">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna pregunta o necesitas ayuda? Escríbenos:</p>
        <form>
            <input type="text" placeholder="Nombre" required style="width: 80%; padding: 0.5rem; margin: 0.5rem 0;">
            <input type="email" placeholder="Correo electrónico" required style="width: 80%; padding: 0.5rem; margin: 0.5rem 0;">
            <textarea placeholder="Mensaje" required style="width: 80%; padding: 0.5rem; margin: 0.5rem 0;"></textarea>
            <button type="submit" style="padding: 0.5rem 1rem; background-color: #4CAF50; color: white; border: none; border-radius: 4px;">Enviar</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Tu Marca de Muebles. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
