export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateUsername = (username: string): boolean => {
  return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
};

export const validateEmailOrUsername = (value: string): boolean => {
  return value.length >= 3;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword && password.length > 0;
};

