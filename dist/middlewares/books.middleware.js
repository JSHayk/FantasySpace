"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBookAuthorValidation = exports.handleBookValidation = void 0;
const validator_1 = __importDefault(require("validator"));
const constants_1 = require("@/constants/constants");
const books_constants_1 = require("@/constants/books.constants");
const handleBookValidation = (req, res, next) => {
    const { title, published_at, isbn } = req.body;
    const date = new Date(published_at);
    if (typeof title !== 'string' || !validator_1.default.isLength(title, { min: 3 })) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: books_constants_1.BOOKS_TITLE_MESSAGE });
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: books_constants_1.BOOKS_PUBLISHED_MESSAGE });
    }
    if (!validator_1.default.isISBN(isbn)) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: books_constants_1.BOOKS_ISBN_MESSAGE });
    }
    req.data = {
        title,
        published_at: date,
        isbn,
    };
    next();
};
exports.handleBookValidation = handleBookValidation;
const handleBookAuthorValidation = (req, res, next) => {
    const { author_id } = req.body;
    if (typeof author_id !== 'number') {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: books_constants_1.BOOKS_INVALID_AUTHOR_ID });
    }
    req.data.author_id = author_id;
    next();
};
exports.handleBookAuthorValidation = handleBookAuthorValidation;
//# sourceMappingURL=books.middleware.js.map