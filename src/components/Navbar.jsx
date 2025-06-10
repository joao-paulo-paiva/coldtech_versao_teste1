// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm w-full fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">ColdTech</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Serviços
            </a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
