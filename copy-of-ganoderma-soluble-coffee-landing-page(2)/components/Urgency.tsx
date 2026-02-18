
import React from 'react';

const Urgency: React.FC = () => {
  const reasons = [
    {
      title: "El Mercado de Bienestar Natural Está Explotando",
      desc: "La tendencia global hacia lo orgánico está en su punto más alto. Quienes se posicionen AHORA tendrán una ventaja competitiva enorme."
    },
    {
      title: "Cada Día que Pasa Pierdes Potencial de Ingresos",
      desc: "Si esperas 'el momento perfecto', pierdes meses de ingresos potenciales que nunca recuperarás. El momento es HOY."
    },
    {
      title: "Tu Salud No Puede Esperar",
      desc: "Cada día sin los beneficios del Ganoderma es un día menos de energía, vitalidad y bienestar real para tu cuerpo."
    },
    {
      title: "El Tiempo Con Tu Familia No Regresa",
      desc: "¿Cuántos cumpleaños más vas a perderte? Cada mes que pasa eliges el trabajo sobre los momentos que realmente importan."
    },
    {
      title: "Las Posiciones Privilegiadas Se Están Llenando",
      desc: "Ser de los primeros en una red en crecimiento multiplica exponencialmente tus resultados. El espacio es limitado."
    },
    {
      title: "El Precio Puede Cambiar",
      desc: "El precio de $96,000 es el mejor disponible en este momento debido a fluctuaciones en costos de producción y envío."
    }
  ];

  return (
    <section className="py-24 px-6 bg-red-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Por Qué Debes Actuar <span className="text-red-600">AHORA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Postergar esta decisión es un error costoso por razones que no puedes ignorar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mb-6">
                {idx + 1}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 text-white p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase text-red-400">La Verdad Incómoda</h3>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
              Dentro de un año estarás en uno de dos lugares: agradeciendo haber tomado esta decisión hoy, o lamentando no haberlo hecho, todavía en el mismo lugar con los mismos problemas.
            </p>
            <p className="text-2xl font-black italic">Tú decides cuál de esas dos personas serás.</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
