"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("@/controllers/users.controller");
const users_middleware_1 = require("@/middlewares/users.middleware");
const router = (0, express_1.default)();
router.post('/register', users_middleware_1.handleUserValidation, users_controller_1.register);
router.post('/login', users_middleware_1.handleUserValidation, users_controller_1.login);
exports.default = router;
//# sourceMappingURL=users.router.js.map