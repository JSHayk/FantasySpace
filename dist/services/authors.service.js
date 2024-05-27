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
exports.handleDeleteAuthor = exports.handleUpdateAuthor = exports.handleAddAuthor = exports.handleGetAuthor = exports.handleGetAuthors = void 0;
const db_1 = __importDefault(require("@/db/db"));
const constants_1 = require("@/constants/constants");
const authors_queries_1 = require("@/queries/authors.queries");
const authors_utils_1 = require("@/utils/authors.utils");
const authors_constants_1 = require("@/constants/authors.constants");
const books_queries_1 = require("@/queries/books.queries");
const handleGetAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield new Promise((resolve, reject) => {
            db_1.default.query(authors_queries_1.GET_AUTHORS_QUERY, (err, result) => {
                if (err)
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
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
exports.handleGetAuthors = handleGetAuthors;
const handleGetAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield (0, authors_utils_1.handleAuthorExistanceById)(id);
        if (!author)
            return authors_constants_1.AUTHOR_NO_EXIST_RESPONSE;
        return {
            data: author,
            status: constants_1.STATUS_CODE_SUCCESS,
        };
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleGetAuthor = handleGetAuthor;
const handleAddAuthor = (author) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, biography, birth_date } = author;
    console.log(author);
    try {
        const isAuthorExist = yield (0, authors_utils_1.handleAuthorExistanceByName)(name);
        if (isAuthorExist)
            return authors_constants_1.AUTHOR_EXIST_RESPONSE;
        return yield new Promise((resolve, reject) => {
            db_1.default.query(authors_queries_1.ADD_AUTHOR_QUERY, [name, biography, birth_date], (err, result) => {
                console.log(err);
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                console.log(result);
                return resolve(authors_constants_1.ADD_AUTHOR_RESPONSE);
            });
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleAddAuthor = handleAddAuthor;
const handleUpdateAuthor = (id, author) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, biography, birth_date } = author;
    try {
        return yield new Promise((resolve, reject) => {
            db_1.default.query(authors_queries_1.UPDATE_AUTHOR_QUERY, [name, biography, birth_date, id], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                resolve(authors_constants_1.UPDATE_AUTHOR_RESPONSE);
            });
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleUpdateAuthor = handleUpdateAuthor;
const handleDeleteAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isAuthorExist = yield (0, authors_utils_1.handleAuthorExistanceById)(id);
        if (!isAuthorExist)
            return authors_constants_1.AUTHOR_NO_EXIST_RESPONSE;
        return yield new Promise((resolve, reject) => {
            db_1.default.query(books_queries_1.DELETE_BOOK_AUTHOR_QUERY, [isAuthorExist.id], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
            });
            db_1.default.query(authors_queries_1.DELETE_AUTHOR_QUERY, [id], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                resolve(authors_constants_1.DELETE_AUTHOR_RESPONSE);
            });
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleDeleteAuthor = handleDeleteAuthor;
//# sourceMappingURL=authors.service.js.map