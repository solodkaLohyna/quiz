// contexts/UserContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  loginAttempts: number;
  incrementLoginAttempts: () => void;
  isBlocked: boolean;
  resetLoginAttempts: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const login = (username: string) => {
    setUser(username);
    setLoginAttempts(0);
    setIsBlocked(false);
  };

  const logout = () => {
    setUser(null);
  };

  const incrementLoginAttempts = () => {
    setLoginAttempts((prev) => prev + 1);
    if (loginAttempts + 1 > 1) {
      setIsBlocked(true);
    }
  };

  const resetLoginAttempts = () => {
    setLoginAttempts(0);
    setIsBlocked(false);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loginAttempts, incrementLoginAttempts, isBlocked, resetLoginAttempts  }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
