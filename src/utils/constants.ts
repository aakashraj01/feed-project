export const STORAGE_KEYS = {
  USERS: 'fooRum_users',
  CURRENT_USER: 'fooRum_currentUser',
  POSTS: 'fooRum_posts',
} as const;

export const TEST_ACCOUNTS = [
  {
    id: '1',
    email: 'demo@example.com',
    username: 'demo',
    password: 'password123',
    avatar: '/demo-avatar.svg',
  },
  {
    id: '2',
    email: 'test@user.com',
    username: 'testuser',
    password: 'testpass',
    avatar: '/testuser-avatar.svg',
  },
] as const;

export const SAMPLE_POSTS = [
  {
    id: '1',
    userId: '1',
    username: 'Theresa Webb',
    avatar: '/theressa.svg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    emoji: '🥴',
    timestamp: Date.now() - 300000,
    likes: 0,
    comments: 0,
  },
  {
    id: '2',
    userId: '2',
    username: 'John Doe',
    avatar: '/john.svg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    emoji: '🤞',
    timestamp: Date.now() - 300000,
    likes: 0,
    comments: 0,
  },
  {
    id: '3',
    userId: '1',
    username: 'Jane Doe',
    avatar: '/jane.svg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    emoji: '💀',
    timestamp: Date.now() - 300000,
    likes: 0,
    comments: 0,
  },
] as const;

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
} as const;

