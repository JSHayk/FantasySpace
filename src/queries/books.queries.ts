export const ADD_BOOK_QUERY =
  'INSERT INTO books (title, published_at, isbn, author_id) VALUES (?, ?, ?, ?)';
export const FIND_BOOK_QUERY = 'SELECT * FROM books WHERE id = ?';
export const GET_BOOKS_QUERY = 'SELECT * FROM books';
export const UPDATE_BOOK_QUERY =
  'UPDATE books SET title = ?, published_at = ?, isbn = ? WHERE id = ?';
export const DELETE_BOOK_QUERY = 'DELETE FROM books WHERE id = ?';
export const DELETE_BOOK_AUTHOR_QUERY = 'DELETE FROM books WHERE author_id = ?';
