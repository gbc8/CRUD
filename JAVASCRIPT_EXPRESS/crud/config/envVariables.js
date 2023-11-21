const env = process.env;

export const DB_HOST = env.DB_HOST ? env.DB_HOST : "localhost";
export const DB_NAME = env.DB_NAME ? env.DB_NAME : "productdb";
export const DB_USER = env.DB_USER ? env.DB_USER : "postgres";
export const DB_PASSWORD = env.DB_PASSWORD ? env.DB_PASSWORD : "admin";
export const DB_PORT = env.DB_PORT ? env.DB_PORT : "5432";