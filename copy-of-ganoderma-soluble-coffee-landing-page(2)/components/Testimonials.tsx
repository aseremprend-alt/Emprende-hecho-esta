
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "De 14 horas diarias en la oficina a trabajar 3 horas desde casa",
      text: "Soy mamá de dos niños pequeños y antes de conocer el Ganoderma Coffee trabajaba 14 horas diarias fuera de casa. Ahora trabajo 3 horas desde casa y estoy presente en cada momento. Mi esposo no lo creía al principio, ahora él también lo toma y ayuda con el negocio.",
      author: "Carolina Méndez, 34 años, Bogotá"
    },
    {
      quote: "$2.8 millones en ingresos extra en 6 meses",
      text: "Como ingeniero, soy naturalmente escéptico. Pero la ciencia detrás del Ganoderma me convenció. En 6 meses he generado $2.8 millones de pesos extra mientras sigo en mi trabajo actual. Me siento 10 años más joven.",
      author: "Roberto Castillo, 42 años, Medellín"
    },
    {
      quote: "Recuperé mi salud y descubrí mi propósito",
      text: "A las tres semanas noté cambios increíbles. Hoy, 8 meses después, no solo recuperé mi salud sino que encontré mi propósito. He generado más de $5 millones compartiendo este producto.",
      author: "Lucía Ramírez, 38 años, Cali"
    },
    {
      quote: "Mi esposo dejó de burlarse cuando vio mi primer cheque",
      text: "Mi esposo pensaba que esto era 'otra de mis ideas locas'. Cuando vio mi primer cheque de $890,000 después de solo 2 meses, su actitud cambió completamente. Lo mejor es que no hice nada complicado.",
      author: "Diana Torres, 29 años, Barranquilla"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase text-gray-900">Resultados Reales de Personas Reales</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-6 text-orange-700 italic">"{t.quote}"</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <p className="font-bold text-gray-900 text-right">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
