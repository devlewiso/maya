import Image from "next/image";
import Footer from "./components/footer";
import Header from './components/Header';
import Link from 'next/link';

export default function Home() {
  // Los cinco idiomas mayas más utilizados en Guatemala
  const mayaLanguages = [
    { name: "K'iche'", color: "#e74c3c", speakers: "1,000,000+", region: "Guatemala Central" },
    { name: "Q'eqchi'", color: "#3498db", speakers: "800,000+", region: "Alta Verapaz, Petén" },
    { name: "Kaqchikel", color: "#2ecc71", speakers: "500,000+", region: "Altiplano Central" },
    { name: "Mam", color: "#f39c12", speakers: "500,000+", region: "Occidente de Guatemala" },
    { name: "Tz'utujil", color: "#9b59b6", speakers: "100,000+", region: "Lago de Atitlán" },
  ];

  // Características de la plataforma
  const features = [
    {
      title: "Lecciones Interactivas",
      description: "Aprende a través de actividades diseñadas por expertos en idiomas",
      icon: "📚",
    },
    {
      title: "Contexto Cultural",
      description: "Comprende el rico patrimonio cultural detrás de cada idioma",
      icon: "🏛️",
    },
    {
      title: "Reconocimiento de Voz",
      description: "Practica la pronunciación con tecnología avanzada de voz",
      icon: "🎤",
    },
    {
      title: "Aprendizaje Comunitario",
      description: "Conéctate con hablantes nativos y otros estudiantes",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <Header />
      {/* Sección Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Fondo decorativo"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center md:text-left md:max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Astro Maya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Uniendo culturas a través del idioma: Aprende español o idiomas mayas de forma interactiva
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/lecciones" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition duration-300 shadow-lg">
                Comenzar a Aprender
              </Link>
              <Link href="/lecciones" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition duration-300 border border-white/40 shadow-lg">
                Saber Más
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Sección de Idiomas */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explora los Idiomas Mayas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre los cinco idiomas mayas más hablados en Guatemala, cada uno con su propia historia y significado cultural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {mayaLanguages.map((language, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="h-3" 
                  style={{ backgroundColor: language.color }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {language.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                    <span className="font-medium">Hablantes:</span> {language.speakers}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    <span className="font-medium">Región:</span> {language.region}
                  </p>
                  <Link 
                    href="/lecciones"
                    className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition duration-300 text-sm font-medium"
                  >
                    Comenzar a Aprender
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-16 md:py-24 bg-indigo-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir Astro Maya?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nuestra plataforma está diseñada para hacer el aprendizaje de idiomas efectivo, atractivo y culturalmente relevante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar tu viaje lingüístico?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete a miles de estudiantes que están descubriendo nuevas culturas y conectando con comunidades a través del idioma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lecciones" className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
              Ver Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Nuestra Misión */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Estamos comprometidos con la preservación y difusión de las lenguas mayas de Guatemala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Preservación Cultural
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trabajamos para mantener vivas las lenguas mayas y promover su uso entre nuevas generaciones.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🌉</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Puentes Lingüísticos
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creamos conexiones entre comunidades a través del aprendizaje mutuo de idiomas.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Innovación Educativa
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizamos tecnología moderna para hacer el aprendizaje de idiomas más accesible y efectivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Añadir el componente Footer aquí */}
      <Footer mayaLanguages={mayaLanguages} />
    </div>
  );
}