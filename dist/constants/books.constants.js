"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOOKS_INVALID_AUTHOR_ID = exports.BOOKS_ISBN_MESSAGE = exports.BOOKS_PUBLISHED_MESSAGE = exports.BOOKS_TITLE_MESSAGE = exports.BOOKS_EMPTY_RESPONSE = exports.BOOKS_DELETE_RESPONSE = exports.BOOKS_UPDATE_RESPONSE = exports.BOOKS_ADD_RESPONSE = exports.BOOKS_FAILED_RESPONSE = void 0;
const constants_1 = require("@/constants/constants");
exports.BOOKS_FAILED_RESPONSE = {
    status: constants_1.STATUS_CODE_FAILED,
    message: 'There is no book with this id',
};
exports.BOOKS_ADD_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The book was added',
};
exports.BOOKS_UPDATE_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The book was updated',
};
exports.BOOKS_DELETE_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The book was deleted',
};
exports.BOOKS_EMPTY_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The data is empty',
};
exports.BOOKS_TITLE_MESSAGE = 'Title must be at least 3 characters long';
exports.BOOKS_PUBLISHED_MESSAGE = 'Published Date must be a valid date';
exports.BOOKS_ISBN_MESSAGE = 'ISBN must be a valid ISBN-10 or ISBN-13';
exports.BOOKS_INVALID_AUTHOR_ID = 'Invalid author_id';
//# sourceMappingURL=books.constants.js.map