
import React from 'react';

const Benefits: React.FC = () => {
  const benefitList = [
    { title: "Energía Natural y Sostenida", desc: "Olvídate de esos picos de energía seguidos de caídas brutales. Actúa como un adaptógeno natural." },
    { title: "Sistema Inmunológico de Guerrero", desc: "Los beta-glucanos fortalecen las defensas naturales de tu cuerpo. Más vitalidad diaria." },
    { title: "Claridad Mental y Enfoque Láser", desc: "Toma decisiones importantes con la claridad que necesitas sin la niebla mental del café tradicional." },
    { title: "Oportunidad de Negocio Comprobada", desc: "Accede a un modelo que ha creado ingresos para miles de emprendedores globalmente." },
    { title: "Flexibilidad Total Para Tu Familia", desc: "Trabaja cuando quieras y desde donde quieras. Tus hijos te tendrán presente siempre." },
    { title: "Respaldo de Calidad Internacional", desc: "Certificaciones internacionales, pruebas rigurosas y un compromiso con la excelencia absoluta." },
    { title: "Reducción Natural del Estrés", desc: "Maneja mejor los desafíos diarios del emprendimiento manteniendo la calma y el enfoque." },
    { title: "Antienvejecimiento Desde Dentro", desc: "Combate los radicales libres. No solo te sentirás mejor, te verás mejor con cada taza." },
    { title: "Mejor Calidad de Sueño", desc: "Equilibra tu sistema nervioso, permitiéndote disfrutar de un sueño profundo y reparador." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-16 uppercase tracking-tight">
          Beneficios que Transforman Vidas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefitList.map((benefit, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-coffee-dark hover:text-white transition-all duration-300 shadow-sm">
              <div className="text-orange-600 font-black text-2xl mb-4 group-hover:text-orange-400">0{idx + 1}</div>
              <h3 className="text-xl font-extrabold mb-3 group-hover:text-white">{benefit.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
