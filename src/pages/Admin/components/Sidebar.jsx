import { Link } from 'react-router-dom';
import { ChartPieIcon, CalendarIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold">ColdTech Admin</h2>
      </div>
      <nav className="mt-6">
        {[
          { name: 'Dashboard', icon: ChartPieIcon, path: '/admin' },
          { name: 'Agendamentos', icon: CalendarIcon, path: '/admin/agendamentos' },
          { name: 'Clientes', icon: UsersIcon, path: '/admin/clientes' },
          { name: 'Configurações', icon: Cog6ToothIcon, path: '/admin/configuracoes' },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700"
          >
            <item.icon className="h-6 w-6 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
