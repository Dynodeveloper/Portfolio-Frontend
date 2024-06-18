// src/components/Portfolio/Portfolio.js
import React from 'react';
import './Portfolio.css'; // Importar estilos CSS (opcional)

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Mi Portafolio</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1...</p>
        </div>
        <div className="portfolio-item">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2...</p>
        </div>
        {/* Puedes añadir más proyectos aquí */}
      </div>
    </section>
  );
}

export default Portfolio;
