// components/ServicesSection.jsx
export default function ServicesSection() {
  const services = [
    { title: 'Instalação Profissional', emoji: '🔧' },
    { title: 'Manutenção Preventiva', emoji: '🛠️' },
    { title: 'Reparo Emergencial', emoji: '🚨' },
    { title: 'Limpeza Completa', emoji: '🧼' },
  ]

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                Soluções completas com garantia de 12 meses
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
