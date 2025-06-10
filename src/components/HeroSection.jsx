// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Manutenção Especializada em 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Ar-Condicionado
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Serviços profissionais com garantia e qualidade para residências e empresas
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Agendar Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
