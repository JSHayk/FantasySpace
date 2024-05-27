"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_BOOK_AUTHOR_QUERY = exports.DELETE_BOOK_QUERY = exports.UPDATE_BOOK_QUERY = exports.GET_BOOKS_QUERY = exports.FIND_BOOK_QUERY = exports.ADD_BOOK_QUERY = void 0;
exports.ADD_BOOK_QUERY = 'INSERT INTO books (title, published_at, isbn, author_id) VALUES (?, ?, ?, ?)';
exports.FIND_BOOK_QUERY = 'SELECT * FROM books WHERE id = ?';
exports.GET_BOOKS_QUERY = 'SELECT * FROM books';
exports.UPDATE_BOOK_QUERY = 'UPDATE books SET title = ?, published_at = ?, isbn = ? WHERE id = ?';
exports.DELETE_BOOK_QUERY = 'DELETE FROM books WHERE id = ?';
exports.DELETE_BOOK_AUTHOR_QUERY = 'DELETE FROM books WHERE author_id = ?';
//# sourceMappingURL=books.queries.js.map