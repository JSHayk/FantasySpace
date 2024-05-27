import dotenv from 'dotenv';
dotenv.config();

import { Config } from '@/interfaces/config.interface';

const config: Config = {
  port: Number(process.env.PORT) || 4001,
  sync_interval: Number(process.env.sync_interval) || 3000,
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  token: {
    secret_key: process.env.TOKEN_SECRET_KEY,
  },
};

export default Object.freeze(config);
