export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

export interface LoginCredentials {
  emailOrUsername: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  signup: (credentials: SignUpCredentials) => Promise<boolean>;
  logout: () => void;
}


