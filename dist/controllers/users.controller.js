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
exports.login = exports.register = void 0;
const users_service_1 = require("@/services/users.service");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.data;
    const { status, message } = yield (0, users_service_1.handleRegister)({ email, password });
    res.status(status).send({ message });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.data;
    const { data, status, message } = yield (0, users_service_1.handleLogin)({ email, password });
    if (data) {
        res.cookie('access_token', data.access_token, {
            httpOnly: true,
            secure: true,
        });
    }
    res.status(status).send(data || { message });
});
exports.login = login;
//# sourceMappingURL=users.controller.js.map