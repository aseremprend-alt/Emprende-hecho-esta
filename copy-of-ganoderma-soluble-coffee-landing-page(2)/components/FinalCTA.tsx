
import React from 'react';
import CTAButton from './CTAButton';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-coffee-dark text-white text-center">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">⚡ ES TU MOMENTO. DECIDE AHORA. ⚡</h2>
        
        <p className="text-xl md:text-3xl font-medium text-gray-300">
          ¿Vas a seguir posponiéndolo o vas a dar el paso?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-12">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl grayscale opacity-50 hover:opacity-80 transition">
             <h3 className="text-2xl font-black text-gray-400 mb-6 uppercase">Opción 1: Seguir Igual</h3>
             <ul className="space-y-4 text-gray-400">
               <li>• Volver a tu rutina de siempre</li>
               <li>• Café que te roba energía</li>
               <li>• Perder tiempo familiar valioso</li>
               <li>• Seguir preguntándote "¿y si...?"</li>
             </ul>
          </div>
          
          <div className="p-8 bg-coffee-accent/20 border-2 border-orange-500 rounded-3xl shadow-[0_0_50px_rgba(234,88,12,0.3)]">
             <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">Opción 2: Transformar Tu Vida</h3>
             <ul className="space-y-4 text-gray-100 font-semibold">
               <li>• Energía y vitalidad instantánea</li>
               <li>• Libertad financiera real</li>
               <li>• Tiempo de calidad con tu familia</li>
               <li>• Ser tu mejor versión HOY</li>
             </ul>
          </div>
        </div>

        <div className="pt-16 space-y-6">
          <CTAButton text="🚀 SÍ, QUIERO TRANSFORMAR MI VIDA AHORA 🚀" className="text-xl md:text-3xl px-12 py-8" />
          <p className="text-gray-400 font-medium italic">Tu transformación comienza en el momento en que decides que estás listo.</p>
        </div>
        
        <div className="flex justify-center gap-12 pt-12 flex-wrap opacity-60">
           <span className="font-bold border-r border-white/20 pr-12 last:border-0">CALIDAD HGW</span>
           <span className="font-bold border-r border-white/20 pr-12 last:border-0">NEGOCIO PROBADO</span>
           <span className="font-bold border-r border-white/20 pr-12 last:border-0">SALUD REAL</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
