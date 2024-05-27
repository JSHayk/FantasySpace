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
exports.deleteAuthor = exports.updateAuthor = exports.addAuthor = exports.getAuthor = exports.getAuthors = void 0;
const authors_service_1 = require("@/services/authors.service");
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, status, message } = yield (0, authors_service_1.handleGetAuthors)();
    res.status(status).send(data || { message });
});
exports.getAuthors = getAuthors;
const getAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, message, status } = yield (0, authors_service_1.handleGetAuthor)(Number(id));
    res.status(status).send(data || { message });
});
exports.getAuthor = getAuthor;
const addAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, message } = yield (0, authors_service_1.handleAddAuthor)(req.author);
    console.log({ status, message });
    res.status(status).send({ message });
});
exports.addAuthor = addAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status, message } = yield (0, authors_service_1.handleUpdateAuthor)(Number(id), req.author);
    res.status(status).send({ message });
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status, message } = yield (0, authors_service_1.handleDeleteAuthor)(Number(id));
    res.status(status).send({ message });
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authors.controller.js.map