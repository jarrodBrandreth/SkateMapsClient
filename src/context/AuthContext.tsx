import { createContext, useContext, useState, useEffect } from 'react';
import { UserProps } from '../types/types';

interface AuthContextProps {
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>(null);

  // useEffect to fetch localStorage to see if user exists in there
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a Auth Provider');
  }
  return context;
}
