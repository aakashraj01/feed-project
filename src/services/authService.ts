import type { User, AuthUser, LoginCredentials, SignUpCredentials } from '../types';
import { storageService } from './storageService';
import { STORAGE_KEYS, TEST_ACCOUNTS } from '../utils/constants';
import { validateEmail, validatePassword, validateUsername } from '../utils/validation';

const initializeUsers = (): void => {
  const existingUsers = storageService.get<User[]>(STORAGE_KEYS.USERS);
  if (!existingUsers) {
    storageService.set(STORAGE_KEYS.USERS, TEST_ACCOUNTS);
  }
};

const getAllUsers = (): User[] => {
  return storageService.get<User[]>(STORAGE_KEYS.USERS) || [];
};

const findUserByEmailOrUsername = (emailOrUsername: string): User | null => {
  const users = getAllUsers();
  return users.find(
    (user) => user.email === emailOrUsername || user.username === emailOrUsername
  ) || null;
};

const sanitizeUser = (user: User): AuthUser => {
  const { password, ...authUser } = user;
  return authUser;
};

export const authService = {
  initialize: initializeUsers,

  login: async (credentials: LoginCredentials): Promise<AuthUser | null> => {
    const user = findUserByEmailOrUsername(credentials.emailOrUsername);
    
    if (!user || user.password !== credentials.password) {
      return null;
    }

    const authUser = sanitizeUser(user);
    storageService.set(STORAGE_KEYS.CURRENT_USER, authUser);
    return authUser;
  },

  signup: async (credentials: SignUpCredentials): Promise<AuthUser | null> => {
    if (!validateEmail(credentials.email)) {
      throw new Error('Invalid email format');
    }

    if (!validateUsername(credentials.username)) {
      throw new Error('Username must be at least 3 characters and contain only letters, numbers, and underscores');
    }

    if (!validatePassword(credentials.password)) {
      throw new Error('Password must be at least 6 characters');
    }

    if (credentials.password !== credentials.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const users = getAllUsers();
    
    const emailExists = users.some((user) => user.email === credentials.email);
    if (emailExists) {
      throw new Error('Email already exists');
    }

    const usernameExists = users.some((user) => user.username === credentials.username);
    if (usernameExists) {
      throw new Error('Username already exists');
    }

    const newUser: User = {
      id: Date.now().toString(),
      email: credentials.email,
      username: credentials.username,
      password: credentials.password,
      avatar: '/demo-avatar.svg',
    };

    users.push(newUser);
    storageService.set(STORAGE_KEYS.USERS, users);

    const authUser = sanitizeUser(newUser);
    storageService.set(STORAGE_KEYS.CURRENT_USER, authUser);
    return authUser;
  },

  logout: (): void => {
    storageService.remove(STORAGE_KEYS.CURRENT_USER);
  },

  getCurrentUser: (): AuthUser | null => {
    return storageService.get<AuthUser>(STORAGE_KEYS.CURRENT_USER);
  },
};

