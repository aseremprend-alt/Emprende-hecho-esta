
import React from 'react';

const Features: React.FC = () => {
  const features = [
    "Café Instantáneo Premium de Alta Calidad",
    "Extracto Puro de Ganoderma Lucidum",
    "Certificaciones Internacionales de Calidad",
    "Preparación Instantánea (Segundos)",
    "Sin Azúcar Añadida",
    "Presentación Individual Práctica",
    "Acceso a Comunidad de Emprendedores",
    "Material de Marketing y Capacitación",
    "Sistema de Ingresos Recurrentes"
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-16 text-gray-900">Lo Que Obtienes Con Tu Ganoderma Soluble Coffee</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200/50">
              <span className="text-orange-500 text-xl">🔸</span>
              <span className="font-semibold text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
