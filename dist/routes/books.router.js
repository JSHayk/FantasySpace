"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("@/controllers/books.controller");
const books_middleware_1 = require("@/middlewares/books.middleware");
const general_middleware_1 = require("@/middlewares/general.middleware");
const router = (0, express_1.default)();
router.get('/books', books_controller_1.getBooks);
router.get('/books/:id', general_middleware_1.handleIdValidation, books_controller_1.getBook);
router.post('/books', books_middleware_1.handleBookValidation, books_middleware_1.handleBookAuthorValidation, books_controller_1.addBook);
router.put('/books/:id', general_middleware_1.handleIdValidation, books_middleware_1.handleBookValidation, books_controller_1.updateBook);
router.delete('/books/:id', general_middleware_1.handleIdValidation, books_controller_1.deleteBook);
exports.default = router;
//# sourceMappingURL=books.router.js.map