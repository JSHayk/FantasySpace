"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_AUTHOR_QUERY = exports.UPDATE_AUTHOR_QUERY = exports.ADD_AUTHOR_QUERY = exports.GET_AUTHOR_BY_NAME_QUERY = exports.GET_AUTHOR__QUERY = exports.GET_AUTHORS_QUERY = void 0;
exports.GET_AUTHORS_QUERY = 'SELECT * FROM authors';
exports.GET_AUTHOR__QUERY = 'SELECT * FROM authors WHERE id = ?';
exports.GET_AUTHOR_BY_NAME_QUERY = 'SELECT * FROM authors WHERE name = ?';
exports.ADD_AUTHOR_QUERY = 'INSERT INTO authors (name, biography, birth_date) VALUES (?, ?, ?)';
exports.UPDATE_AUTHOR_QUERY = 'UPDATE authors SET name = ?, biography = ?, birth_date = ? WHERE id = ?';
exports.DELETE_AUTHOR_QUERY = 'DELETE FROM authors WHERE id = ?';
//# sourceMappingURL=authors.queries.js.map