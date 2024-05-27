"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIND_USER_QUERY = exports.GET_USER_QUERYS = exports.FIND_USER_BY_PASSWORD = exports.FIND_USER_BY_EMAIL = exports.REGISTER_QUERY = void 0;
exports.REGISTER_QUERY = 'INSERT INTO users (email, password) VALUES (?, ?)';
exports.FIND_USER_BY_EMAIL = 'SELECT * FROM users WHERE email = ?';
exports.FIND_USER_BY_PASSWORD = 'SELECT * FROM users WHERE password = ?';
exports.GET_USER_QUERYS = 'SELECT * FROM users WHERE password = ?';
exports.FIND_USER_QUERY = 'SELECT * FROM users WHERE email = ? AND password = ?';
//# sourceMappingURL=users.queries.js.map