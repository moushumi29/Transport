/* tokenService.ts */

export interface UserTokens {
  accessToken: string;
  refreshToken?: string;
  [key: string]: any;
}

export interface LanguageConfig {
  language: string;
  languageName?: string;
}

const USER_KEY = "user";
const LANGUAGE_KEY = "language";

/**
 * Safe JSON parse
 */
const parseJSON = <T>(value: string | null): T | null => {
  try {
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
};

/**
 * Prevent SSR crashes (Next.js)
 */
const isBrowser = typeof window !== "undefined";

const getLocalRefreshToken = (): string | undefined => {
  if (!isBrowser) return;
  const user = parseJSON<UserTokens>(localStorage.getItem(USER_KEY));
  return user?.refreshToken;
};

const getLocalAccessToken = (): string | undefined => {
  if (!isBrowser) return;
  const user = parseJSON<UserTokens>(localStorage.getItem(USER_KEY));
  return user?.accessToken;
};

const updateLocalAccessToken = (token: string): void => {
  if (!isBrowser) return;
  const user = parseJSON<UserTokens>(localStorage.getItem(USER_KEY));
  if (!user) return;

  user.accessToken = token;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const updateLocalRefreshToken = (token: string): void => {
  if (!isBrowser) return;
  const user = parseJSON<UserTokens>(localStorage.getItem(USER_KEY));
  if (!user) return;

  user.refreshToken = token;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const getUser = (): UserTokens | null => {
  if (!isBrowser) return null;
  return parseJSON<UserTokens>(localStorage.getItem(USER_KEY));
};

const setUser = (user: UserTokens): void => {
  if (!isBrowser) return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const removeUser = (): void => {
  if (!isBrowser) return;
  localStorage.removeItem(USER_KEY);
};

const setLanguage = (language: LanguageConfig): void => {
  if (!isBrowser) return;
  localStorage.setItem(LANGUAGE_KEY, JSON.stringify(language));
};

const getLanguage = (): LanguageConfig | null => {
  if (!isBrowser) return null;
  return parseJSON<LanguageConfig>(localStorage.getItem(LANGUAGE_KEY));
};

const updateLanguage = (language: string): void => {
  if (!isBrowser) return;
  const languageObject = parseJSON<LanguageConfig>(
    localStorage.getItem(LANGUAGE_KEY)
  );
  if (!languageObject) return;

  languageObject.language = language;
  localStorage.setItem(LANGUAGE_KEY, JSON.stringify(languageObject));
};

const updateLanguageName = (languageName: string): void => {
  if (!isBrowser) return;
  const languageObject = parseJSON<LanguageConfig>(
    localStorage.getItem(LANGUAGE_KEY)
  );
  if (!languageObject) return;

  languageObject.languageName = languageName;
  localStorage.setItem(LANGUAGE_KEY, JSON.stringify(languageObject));
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  updateLocalRefreshToken,
  getUser,
  setUser,
  removeUser,
  setLanguage,
  getLanguage,
  updateLanguage,
  updateLanguageName,
};

export default TokenService;
