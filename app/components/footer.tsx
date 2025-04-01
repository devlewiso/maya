import { FC } from "react";

interface FooterProps {
  mayaLanguages: Array<{
    name: string;
    color: string;
    speakers: string;
    region: string;
  }>;
}

const Footer: FC<FooterProps> = ({ mayaLanguages }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {mayaLanguages.map((language, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-300"
                style={{ borderBottom: `2px solid ${language.color}` }}
              >
                {language.name}
              </a>
            ))}
          </div>
          
          <a 
            href="mailto:devlewiso@gmail.com" 
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition duration-300 shadow-lg mb-6"
          >
            Contáctanos
          </a>
          

        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>{new Date().getFullYear()} Astro Maya. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;