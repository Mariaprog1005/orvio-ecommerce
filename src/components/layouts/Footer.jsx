import { useState } from 'react';
import { Link } from 'react-router-dom';

const empresa = {
  nombre: 'Orvio',
  descripcion: 'Tecnología de calidad con atención personalizada por WhatsApp.',
  direccion: 'Belgrano 6424, José León Suárez, Pcia. de Buenos Aires',
  telefono: '+54 11 6250 6608',
  horario: 'Lunes a viernes de 9 a 18 hs',
};

const equipo = [
  { id: 1, nombre: 'Maria Lopez', rol: 'Desarrolladora front-end', iniciales: 'ML' },
  { id: 2, nombre: 'Rosana Scorzo', rol: 'Dueña de la tienda', iniciales: 'RS' },
  { id: 3, nombre: 'Lorena Paz', rol: 'Atención al cliente', iniciales: 'MP' },
];

const Footer = () => {
  const anioActual = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [suscripto, setSuscripto] = useState(false);

  const suscribirse = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSuscripto(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-footer">
      <div className="footer-columnas">
        <section>
          <h4 className="footer-titulo">{empresa.nombre}</h4>
          <p className="footer-texto">{empresa.descripcion}</p>
          <ul className="footer-lista">
            <li>{empresa.direccion}</li>
            <li>Tel: {empresa.telefono}</li>
            <li>{empresa.horario}</li>
          </ul>
        </section>

        <section>
          <h4 className="footer-titulo">Enlaces</h4>
          <ul className="footer-lista">
            <li><Link to="/productos" className="footer-footerLink">Productos</Link></li>
            <li><Link to="/carrito" className="footer-footerLink">Carrito</Link></li>
            <li><a href="#privacidad" className="footer-footerLink">Política de privacidad</a></li>
          </ul>
        </section>

        <section>
          <h4 className="footer-titulo">Newsletter</h4>
          {suscripto ? (
            <p className="footer-texto">¡Gracias por suscribirte!</p>
          ) : (
            <form onSubmit={suscribirse} className="footer-newsletter">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-input"
                required
              />
              <button type="submit" className="footer-boton">Suscribirme</button>
            </form>
          )}
        </section>
      </div>

      <div className="footer-equipo">
        <h4 className="footer-titulo">Nuestro equipo</h4>
        <div className="footer-tarjetas">
          {equipo.map((persona) => (
            <article key={persona.id} className="tarjeta-tarjeta">
              <div className="tarjeta-avatar">{persona.iniciales}</div>
              <div>
                <h3 className="tarjeta-nombre">{persona.nombre}</h3>
                <p className="tarjeta-rol">{persona.rol}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="footer-copyrightContainer">
        <p className="footer-copyright">
          © {anioActual} <span className="footer-brand">{empresa.nombre}</span> – Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
