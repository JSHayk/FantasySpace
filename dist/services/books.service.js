"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteBook = exports.handleUpdateBook = exports.handleAddBook = exports.handleGetBook = exports.handleGetBooks = void 0;
const db_1 = __importDefault(require("@/db/db"));
const books_utils_1 = require("@/utils/books.utils");
const constants_1 = require("@/constants/constants");
const books_constants_1 = require("@/constants/books.constants");
const books_queries_1 = require("@/queries/books.queries");
const handleGetBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            db_1.default.query(books_queries_1.GET_BOOKS_QUERY, (err, result) => {
                if (err) {
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
                }
                if (!result.length)
                    return resolve(books_constants_1.BOOKS_EMPTY_RESPONSE);
                return resolve({
                    status: constants_1.STATUS_CODE_SUCCESS,
                    data: result,
                });
            });
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleGetBooks = handleGetBooks;
const handleGetBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, status, message } = yield (0, books_utils_1.handleBookExistanceByEmail)(id);
        if (status !== constants_1.STATUS_CODE_SUCCESS) {
            return {
                status,
                message,
            };
        }
        if (!data.length) {
            return books_constants_1.BOOKS_FAILED_RESPONSE;
        }
        return {
            data: data[0],
            status: constants_1.STATUS_CODE_SUCCESS,
        };
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleGetBook = handleGetBook;
const handleAddBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, published_at, isbn, author_id } = data;
    const values = [title, published_at, isbn, author_id];
    try {
        return new Promise((resolve, reject) => {
            db_1.default.query(books_queries_1.ADD_BOOK_QUERY, values, (err) => {
                if (err)
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
                return resolve(books_constants_1.BOOKS_ADD_RESPONSE);
            });
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleAddBook = handleAddBook;
const handleUpdateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, published_at, isbn } = data;
    try {
        new Promise((resolve, reject) => {
            db_1.default.query(books_queries_1.UPDATE_BOOK_QUERY, [title, published_at, isbn, id], (err, result) => {
                if (err) {
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
                }
                resolve();
            });
        });
        return books_constants_1.BOOKS_UPDATE_RESPONSE;
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleUpdateBook = handleUpdateBook;
const handleDeleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, status, message } = yield (0, books_utils_1.handleBookExistanceByEmail)(id);
        if (status !== constants_1.STATUS_CODE_SUCCESS) {
            return {
                status,
                message,
            };
        }
        if (!data.length) {
            return books_constants_1.BOOKS_FAILED_RESPONSE;
        }
        yield new Promise((resolve, reject) => {
            db_1.default.query(books_queries_1.DELETE_BOOK_QUERY, [id], (err) => {
                if (err) {
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
                }
                resolve();
            });
        });
        return books_constants_1.BOOKS_DELETE_RESPONSE;
    }
    catch (error) {
        return error;
    }
});
exports.handleDeleteBook = handleDeleteBook;
//# sourceMappingURL=books.service.js.map