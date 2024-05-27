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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getBook = exports.getBooks = void 0;
const books_service_1 = require("@/services/books.service");
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, status, message } = yield (0, books_service_1.handleGetBooks)();
    res.status(status).send(data || message);
});
exports.getBooks = getBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, status, message } = yield (0, books_service_1.handleGetBook)(Number(id));
    res.status(status).send(data || { message });
});
exports.getBook = getBook;
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, status } = yield (0, books_service_1.handleAddBook)(req.data);
    res.status(status).send({ message });
});
exports.addBook = addBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status, message } = yield (0, books_service_1.handleUpdateBook)(Number(id), req.data);
    res.status(status).send({ message });
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status, message } = yield (0, books_service_1.handleDeleteBook)(Number(id));
    res.status(status).send({ message });
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=books.controller.js.map