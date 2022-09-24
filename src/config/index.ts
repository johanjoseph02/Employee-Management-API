require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  /**
   * Port the app should run on
   */
  port: parseInt(process.env.PORT) || 5050,

  /**
   * Database the app should connect to
   */
  publicAnonKey: process.env.SUPABASE_PUBLIC_ANON_KEY,
  projectURL: process.env.SUPABASE_PROJECT_URL,
  baseURL: process.env.BASE_URL,

  /**
   * The secret sauce to validate JWT
   */
  jwtSecret: process.env.JWT_SECRET,

  //captcha keys
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
  recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,

  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
