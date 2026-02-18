
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Realmente funciona el Ganoderma?", a: "Ha sido utilizado en la medicina tradicional china por 2,000 años. Existen más de 400 estudios científicos que respaldan sus beneficios antioxidantes e inmunomoduladores." },
    { q: "¿Necesito experiencia en ventas?", a: "Absolutamente NO. Estás compartiendo algo que genuinamente mejora tu vida. Recibirás capacitación completa y scripts probados." },
    { q: "¿Cuánto tiempo debo dedicar al negocio?", a: "Tú decides. Algunos dedican 5-10 horas semanales para ingresos extra, otros construyen negocios de tiempo completo en 6-12 meses." },
    { q: "¿El café sabe bien?", a: "¡Delicioso! Tiene un sabor rico y suave, sin la acidez del café tradicional. Te encantará cómo te hace sentir." },
    { q: "¿Qué pasa si no logro vender?", a: "Incluso si no vendes, obtienes un producto extraordinario para tu salud. Pero con nuestra guía, compartirlo será lo más natural del mundo." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase text-gray-900">Preguntas Frecuentes</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-extrabold mb-4 text-gray-900 flex items-start gap-3">
                <span className="text-orange-600">{idx + 1}.</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed ml-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
