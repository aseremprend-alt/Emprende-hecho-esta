
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-12 text-center text-gray-900">
          Sé exactamente cómo te sientes ahora mismo...
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>
            Estás cansado de trabajar largas horas lejos de tu familia. Cada día que pasa sientes que el tiempo con tus hijos, tu pareja, tus seres queridos se escapa entre tus dedos mientras intentas llegar a fin de mes.
          </p>
          <p>
            Has probado diferentes negocios, oportunidades "milagrosas" que prometían libertad financiera pero que solo te dejaron con productos que no podías vender, inventarios que nadie quería y la frustrante sensación de haber perdido tiempo y dinero.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-10">
            <h3 className="text-xl font-extrabold text-red-600 mb-4">Y lo peor de todo...</h3>
            <p className="mb-6">
              Mientras intentas construir tu libertad, tu salud se deteriora. El estrés te consume. La fatiga es tu compañera constante. Dependes del café comercial cargado de químicos solo para sobrevivir el día, sabiendo que no es saludable pero sin ver otra opción.
            </p>
            
            <p className="font-bold mb-4">Te sientes atrapado entre dos opciones imposibles:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">❌</span>
                <span>Seguir en el mismo lugar, viendo pasar los años sin tiempo ni dinero suficiente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">❌</span>
                <span>O arriesgarte de nuevo en algo que probablemente no funcione</span>
              </li>
            </ul>
          </div>

          <p className="text-center font-black text-2xl text-gray-900 mt-12">
            Pero déjame decirte algo importante: <span className="text-orange-600 underline">NO es tu culpa.</span>
          </p>
          <p className="text-center italic text-gray-600">
            El problema nunca has sido tú. El problema han sido los productos y sistemas equivocados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
