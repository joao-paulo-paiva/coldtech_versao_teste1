// components/CTASection.jsx
export default function CTASection({ openModal }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para Melhorar seu Conforto?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Entre em contato agora mesmo e agende uma avaliação gratuita
        </p>
        <button 
          onClick={openModal}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 animate-pulse"
        >
          Solicitar Orçamento
        </button>
      </div>
    </section>
  )
}
