import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">Painel Administrativo</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-gray-600">{user?.name}</span>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
