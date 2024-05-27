"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authors_controller_1 = require("@/controllers/authors.controller");
const general_middleware_1 = require("@/middlewares/general.middleware");
const authors_middleware_1 = require("@/middlewares/authors.middleware");
const router = (0, express_1.default)();
router.get('/authors', authors_controller_1.getAuthors);
router.get('/authors/:id', general_middleware_1.handleIdValidation, authors_controller_1.getAuthor);
router.post('/authors', authors_middleware_1.handleAuthorValidation, authors_controller_1.addAuthor);
router.put('/authors/:id', authors_middleware_1.handleAuthorValidation, authors_controller_1.updateAuthor);
router.delete('/authors/:id', general_middleware_1.handleIdValidation, authors_controller_1.deleteAuthor);
exports.default = router;
//# sourceMappingURL=authors.router.js.map