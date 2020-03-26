interface Config {
  dbPass: string;
  dbUser: string;
  dbPort: number;
  dbName: string;
  dbHost: string;
}

export const getConfig = (): Config => (
  {
    dbPass: process.env.DB_PASSWORD,
    dbUser: process.env.DB_USER,
    dbPort: +process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
  }
);