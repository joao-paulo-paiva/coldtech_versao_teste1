import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Mantém login após refresh
    const saved = localStorage.getItem('isLoggedIn');
    return saved ? { name: "Admin" } : null;
  });

  const login = (credentials) => {
    // Aqui você pode validar usuário/senha (mock ou integração futura)
    if (
      credentials.email === 'admin@coldtech.com' &&
      credentials.password === 'admin123'
    ) {
      setUser({ name: "Admin" });
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
