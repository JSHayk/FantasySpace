"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("@/controllers/user.controller");
const user_middleware_1 = require("@/middlewares/user.middleware");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.post('/register', user_middleware_1.handleRegisterValidation, user_controller_1.register);
exports.default = router;
//# sourceMappingURL=user.router.js.map