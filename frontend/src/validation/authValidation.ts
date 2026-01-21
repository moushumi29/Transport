
export const isValidEmail = (email: string): boolean => {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const isValidPassword = (password: string): boolean => {
  // Minimum 6 chars (adjust as needed)
  return password.trim().length >= 6;
};

export interface AuthValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateLogin = (
  email: string,
  password: string
): AuthValidationResult => {
  if (!email) {
    return { isValid: false, error: "Email is required" };
  }

  if (!isValidEmail(email)) {
    return { isValid: false, error: "Invalid email address" };
  }

  if (!password) {
    return { isValid: false, error: "Password is required" };
  }

  if (!isValidPassword(password)) {
    return { isValid: false, error: "Password must be at least 6 characters" };
  }

  return { isValid: true };
};

export const validateCreateAccount = (
    username: string,
    email: string,
    password: string,
): AuthValidationResult => {
    if(!username) {
        return { isValid: false, error: "Username is required"};
    }

    if (!email) {
        return { isValid: false, error: "Email is required"};
    }

    if (!isValidEmail(email)) {
        return { isValid: false, error: "Invalid email address"};
    }

    if (!password) {
        return { isValid: false, error: "Password is required"};
    }

    if (!isValidPassword(password)) {
        return { isValid: false, error: "Password must be at least 6 characters"};
    }

    return { isValid: true };
};