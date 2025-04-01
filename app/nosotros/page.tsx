import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

export default function Nosotros() {
  // Los cinco idiomas mayas más utilizados en Guatemala
  const mayaLanguages = [
    { name: "K'iche'", color: "#e74c3c", speakers: "1,000,000+", region: "Guatemala Central" },
    { name: "Q'eqchi'", color: "#3498db", speakers: "800,000+", region: "Alta Verapaz, Petén" },
    { name: "Kaqchikel", color: "#2ecc71", speakers: "500,000+", region: "Altiplano Central" },
    { name: "Mam", color: "#f39c12", speakers: "500,000+", region: "Occidente de Guatemala" },
    { name: "Tz'utujil", color: "#9b59b6", speakers: "100,000+", region: "Lago de Atitlán" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Sobre Nosotros
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nuestra Misión</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            En Astro Maya, estamos comprometidos con la preservación y difusión de las lenguas mayas de Guatemala. 
            Nuestra plataforma nace con el objetivo de crear puentes lingüísticos entre comunidades y facilitar 
            el aprendizaje tanto para hablantes de español que desean aprender lenguas mayas, como para hablantes 
            de lenguas mayas que buscan mejorar su español.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Creemos firmemente que el idioma es la puerta de entrada a una cultura, y a través de nuestras 
            lecciones interactivas, buscamos mantener vivas estas importantes lenguas y promover un intercambio 
            cultural enriquecedor para todos.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nuestro Equipo</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Somos un equipo diverso de lingüistas, educadores y desarrolladores apasionados por las lenguas 
            indígenas y la tecnología educativa. Trabajamos en estrecha colaboración con comunidades mayas 
            para asegurar que nuestro contenido sea auténtico, respetuoso y pedagógicamente efectivo.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Si tienes preguntas o sugerencias, no dudes en contactarnos a través de nuestro correo electrónico.
            Estamos siempre abiertos a colaboraciones que nos ayuden a mejorar nuestra plataforma.
          </p>
        </div>
      </main>
      
      <Footer mayaLanguages={mayaLanguages} />
    </div>
  );
}