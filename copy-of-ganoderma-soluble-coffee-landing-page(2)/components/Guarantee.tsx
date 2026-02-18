
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-4 border-double border-coffee-accent relative">
        {/* Seal Icon */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-coffee-accent rounded-full flex items-center justify-center text-white border-4 border-white shadow-xl">
           <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
           </svg>
        </div>
        
        <div className="text-center mt-8">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter">Garantía de Calidad Absoluta HGW</h2>
          
          <div className="space-y-6 text-lg text-gray-700 text-left">
            <p className="font-semibold text-center text-xl text-gray-800">Entiendo perfectamente tu posible escepticismo. Has sido decepcionado antes.</p>
            
            <ul className="space-y-4 pt-6">
              <li className="flex gap-4"><span className="text-green-600 font-bold">✅</span> <strong>Certificaciones Internacionales:</strong> Pruebas rigurosas que garantizan pureza y potencia.</li>
              <li className="flex gap-4"><span className="text-green-600 font-bold">✅</span> <strong>Innovación Científica:</strong> Años de investigación para superar los estándares de la industria.</li>
              <li className="flex gap-4"><span className="text-green-600 font-bold">✅</span> <strong>Producto Probado:</strong> Miles de personas ya experimentan los beneficios a diario.</li>
            </ul>

            <p className="pt-8 italic text-center font-bold text-coffee-dark text-xl">
              "Si no cumple nuestras promesas de calidad, no deberías pagarlo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
