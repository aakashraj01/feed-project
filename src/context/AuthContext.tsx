import { createContext, type ReactNode, useState, useEffect } from 'react';
import type { AuthUser, LoginCredentials, SignUpCredentials, AuthContextType } from '../types';
import { authService } from '../services/authService';

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    authService.initialize();
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const authUser = await authService.login(credentials);
      if (authUser) {
        setUser(authUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (credentials: SignUpCredentials): Promise<boolean> => {
    try {
      const authUser = await authService.signup(credentials);
      if (authUser) {
        setUser(authUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = (): void => {
    authService.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

