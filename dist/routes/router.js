"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = __importDefault(require("@/routes/users.router"));
const books_router_1 = __importDefault(require("@/routes/books.router"));
const authors_router_1 = __importDefault(require("@/routes/authors.router"));
const users_middleware_1 = require("@/middlewares/users.middleware");
const router = (0, express_1.default)();
router.use(users_router_1.default);
router.use(users_middleware_1.handleTokenValidation);
router.use(books_router_1.default);
router.use(authors_router_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map