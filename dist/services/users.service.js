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
exports.handleLogin = exports.handleRegister = void 0;
const db_1 = __importDefault(require("@/db/db"));
const constants_1 = require("@/constants/constants");
const users_queries_1 = require("@/queries/users.queries");
const users_constants_1 = require("@/constants/users.constants");
const users_utils_1 = require("@/utils/users.utils");
const handleRegister = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, }) {
    try {
        const user = yield (0, users_utils_1.handleUserExistanceByEmail)(email);
        if (user)
            return users_constants_1.USER_EMAIL_EXIST_RESPONSE;
        const hashedPassword = (0, users_utils_1.handleUserPasswordHashing)(password);
        new Promise((resolve, reject) => {
            db_1.default.query(users_queries_1.REGISTER_QUERY, [email, hashedPassword], (err, result) => {
                if (err)
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
                resolve();
            });
        });
        return users_constants_1.USER_REGISTER_SUCCESS_RESPONSE;
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleRegister = handleRegister;
const handleLogin = (_b) => __awaiter(void 0, [_b], void 0, function* ({ email, password, }) {
    try {
        const isEmailValid = yield (0, users_utils_1.handleUserExistanceByEmail)(email);
        if (!isEmailValid)
            return users_constants_1.USER_EMAIL_NO_EXIST_RESPONSE;
        const validPassword = (0, users_utils_1.handleUserPasswordHashedReversal)(password, isEmailValid.password);
        if (!validPassword) {
            return users_constants_1.USER_ACCESS_DENIED_RESPONSE;
        }
        const generatedToken = (0, users_utils_1.handleGenerateToken)({
            email,
            id: isEmailValid.id,
        });
        const user = yield (0, users_utils_1.handleUserExistance)(email, validPassword);
        if (!user)
            return users_constants_1.USER_ACCESS_DENIED_RESPONSE;
        return {
            data: {
                user,
                access_token: generatedToken,
            },
            status: constants_1.STATUS_CODE_SUCCESS,
        };
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleLogin = handleLogin;
//# sourceMappingURL=users.service.js.map