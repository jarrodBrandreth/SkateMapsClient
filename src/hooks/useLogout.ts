import { useAuthContext } from '../context/AuthContext';

export const useLogout = () => {
  const { setUser } = useAuthContext();

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return { logout };
};
