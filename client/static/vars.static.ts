export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;
export const CAPCHA_SITE_KEY: any = process.env.NEXT_PUBLIC_CAPCHA_SITE_KEY;
export const CAPCHA_SECRET_KEY: any = process.env.NEXT_PUBLIC_CAPCHA_SECRET_KEY;

const vars = {
  APP_NAME,
  BACKEND_API,
  CAPCHA_SITE_KEY,
  CAPCHA_SECRET_KEY,
};

export default vars;
