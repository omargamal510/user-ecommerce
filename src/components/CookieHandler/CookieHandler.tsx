import Cookies from "cookie-universal";

const cookies = Cookies();

export const setCookie = (name: string, value: string, options: any): void => {
  cookies.set(name, value, options);
};

export const getCookie = (name: string): string | undefined => {
  return cookies.get(name);
};

export const removeCookie = (name: string): void => {
  cookies.remove(name);
};

function CookieHandler() {
  return;
}

export default CookieHandler;
