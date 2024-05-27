export const REGISTER_QUERY =
  'INSERT INTO users (email, password) VALUES (?, ?)';
export const FIND_USER_BY_EMAIL = 'SELECT * FROM users WHERE email = ?';
export const FIND_USER_BY_PASSWORD = 'SELECT * FROM users WHERE password = ?';
export const GET_USER_QUERYS = 'SELECT * FROM users WHERE password = ?';
export const FIND_USER_QUERY =
  'SELECT * FROM users WHERE email = ? AND password = ?';
