export const GET_AUTHORS_QUERY = 'SELECT * FROM authors';
export const GET_AUTHOR__QUERY = 'SELECT * FROM authors WHERE id = ?';
export const GET_AUTHOR_BY_NAME_QUERY = 'SELECT * FROM authors WHERE name = ?';
export const ADD_AUTHOR_QUERY =
  'INSERT INTO authors (name, biography, birth_date) VALUES (?, ?, ?)';
export const UPDATE_AUTHOR_QUERY =
  'UPDATE authors SET name = ?, biography = ?, birth_date = ? WHERE id = ?';
export const DELETE_AUTHOR_QUERY = 'DELETE FROM authors WHERE id = ?';
