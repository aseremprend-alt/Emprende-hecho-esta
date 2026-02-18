
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-black text-gray-500 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-center items-center gap-2 text-white font-black text-xl mb-4">
          <span className="text-orange-600">GANODERMA</span> COFFEE <span className="text-gray-600 font-light">by HGW</span>
        </div>
        
        <div className="text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} MariaN Emprendedora. Todos los derechos reservados.</p>
          <p>Este sitio no es parte de Facebook ni de Google Inc. Además, este sitio NO está respaldado por Facebook o Google de ninguna manera.</p>
          <p className="pt-4 max-w-2xl mx-auto text-xs">
            AVISO LEGAL: Los resultados financieros pueden variar según el esfuerzo y dedicación personal. Las declaraciones sobre salud no han sido evaluadas por todas las agencias reguladoras y no pretenden diagnosticar, tratar, curar o prevenir ninguna enfermedad.
          </p>
        </div>
        
        <div className="pt-6 flex justify-center gap-8 text-xs font-bold uppercase tracking-widest">
           <a href="#" className="hover:text-white transition">Privacidad</a>
           <a href="#" className="hover:text-white transition">Términos</a>
           <a href="#" className="hover:text-white transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
