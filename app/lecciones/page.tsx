"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import Header from "../components/Header";

export default function LeccionesPage() {
  const [, setHoveredLanguage] = useState<string | null>(null);

  // The five most used Maya languages in Guatemala with additional details for the lessons page
  const mayaLanguages = [
    { 
      id: "kiche",
      name: "K'iche'", 
      color: "#e74c3c", 
      gradient: "from-red-500 to-red-700",
      hoverGradient: "from-red-600 to-red-800",
      speakers: "1,000,000+", 
      region: "Central Guatemala",
      description: "El K'iche' es una de las lenguas mayas más habladas en Guatemala. Aprende este idioma ancestral con nuestras lecciones interactivas.",
      icon: "/icons/kiche-icon.svg",
      backgroundImage: "/backgrounds/kiche-bg.jpg",
      lessons: 10
    },
    { 
      id: "qeqchi",
      name: "Q'eqchi'", 
      color: "#3498db", 
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "from-blue-600 to-blue-800",
      speakers: "800,000+", 
      region: "Alta Verapaz, Petén",
      description: "El Q'eqchi' se habla principalmente en Alta Verapaz y Petén. Descubre su rica estructura lingüística y expresiones únicas.",
      icon: "/icons/qeqchi-icon.svg",
      backgroundImage: "/backgrounds/qeqchi-bg.jpg",
      lessons: 10
    },
    { 
      id: "kaqchikel",
      name: "Kaqchikel", 
      color: "#2ecc71", 
      gradient: "from-green-500 to-green-700",
      hoverGradient: "from-green-600 to-green-800",
      speakers: "500,000+", 
      region: "Central Highlands",
      description: "El Kaqchikel es hablado en las tierras altas centrales de Guatemala. Sumérgete en su vocabulario y gramática fascinante.",
      icon: "/icons/kaqchikel-icon.svg",
      backgroundImage: "/backgrounds/kaqchikel-bg.jpg",
      lessons: 10
    },
    { 
      id: "mam",
      name: "Mam", 
      color: "#f39c12", 
      gradient: "from-yellow-500 to-yellow-700",
      hoverGradient: "from-yellow-600 to-yellow-800",
      speakers: "500,000+", 
      region: "Western Guatemala",
      description: "El Mam es una lengua maya hablada en el oeste de Guatemala. Explora sus sonidos únicos y estructura gramatical.",
      icon: "/icons/mam-icon.svg",
      backgroundImage: "/backgrounds/mam-bg.jpg",
      lessons: 10
    },
    { 
      id: "tzutujil",
      name: "Tz'utujil", 
      color: "#9b59b6", 
      gradient: "from-purple-500 to-purple-700",
      hoverGradient: "from-purple-600 to-purple-800",
      speakers: "100,000+", 
      region: "Lake Atitlán",
      description: "El Tz'utujil es hablado principalmente alrededor del Lago Atitlán. Aprende este idioma maya con nuestras lecciones culturalmente contextualizadas.",
      icon: "/icons/tzutujil-icon.svg",
      backgroundImage: "/backgrounds/tzutujil-bg.jpg",
      lessons: 10
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/patterns/maya-pattern.svg"
            alt="Maya pattern background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Explora las 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"> Lenguas Mayas</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Descubre la riqueza cultural y lingüística de las cinco lenguas mayas más habladas en Guatemala. 
              Cada idioma ofrece una ventana única a la cosmovisión y tradiciones del pueblo maya.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Language Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {mayaLanguages.map((language, index) => (
            <motion.div
              key={language.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`col-span-1 ${index === 0 ? 'lg:col-span-2 row-span-2' : index === 1 ? 'lg:col-span-1 row-span-1' : ''}`}
            >
              <Link href={`/${language.id}Leccion`}>
                <div 
                  className="relative h-full overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                  onMouseEnter={() => setHoveredLanguage(language.id)}
                  onMouseLeave={() => setHoveredLanguage(null)}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${language.gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-95`}></div>
                    <Image
                      src={language.backgroundImage || "/backgrounds/default-bg.jpg"}
                      alt={`${language.name} background`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="opacity-40"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <Image
                            src={language.icon || "/icons/default-icon.svg"}
                            alt={`${language.name} icon`}
                            width={32}
                            height={32}
                          />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{language.name}</h2>
                      </div>
                      
                      <p className="text-white/90 mb-4">{language.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                          {language.speakers} hablantes
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                          {language.region}
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                          {language.lessons} lecciones
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className={`inline-flex items-center px-5 py-3 bg-white/20 hover:bg-white/30 transition-colors duration-300 rounded-xl text-white font-medium`}>
                        Explorar lecciones
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué aprender una lengua maya?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Las lenguas mayas son parte fundamental del patrimonio cultural de Guatemala y Mesoamérica. 
              Aprender estos idiomas te conecta con tradiciones milenarias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Preservación Cultural
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Contribuye a la preservación de idiomas ancestrales que son fundamentales para la identidad cultural de Guatemala.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Estructuras Lingüísticas Únicas
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Las lenguas mayas tienen estructuras gramaticales y conceptos lingüísticos que amplían tu comprensión del lenguaje humano.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Conexión Comunitaria
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Establece conexiones más profundas con comunidades mayas y participa en intercambios culturales significativos.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer mayaLanguages={mayaLanguages} />
    </div>
  );
}