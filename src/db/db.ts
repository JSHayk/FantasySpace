import mysql from 'mysql2';

import config from '@/config/config';

const {
  db: { host, username, password, name },
} = config;

const pool = mysql.createPool({
  host: host,
  user: username,
  password: password,
  database: name,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
