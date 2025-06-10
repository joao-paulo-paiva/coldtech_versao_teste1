// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">ColdTech</h4>
            <p className="text-sm">Especialistas em climatização desde 2010</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#instalacao" className="hover:text-white transition-colors">Instalação</a></li>
              <li><a href="#manutencao" className="hover:text-white transition-colors">Manutenção</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm">contato@coldtech.com</p>
            <p className="text-sm">(11) 9999-9999</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; 2024 ColdTech - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
