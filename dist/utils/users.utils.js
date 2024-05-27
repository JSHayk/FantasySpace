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
exports.handleGenerateToken = exports.handleUserPasswordHashedReversal = exports.handleUserPasswordHashing = exports.handleUserExistance = exports.handleUserExistanceByEmail = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("@/config/config"));
const db_1 = __importDefault(require("@/db/db"));
const users_queries_1 = require("@/queries/users.queries");
const constants_1 = require("@/constants/constants");
const { token: { secret_key }, } = config_1.default;
const handleUserExistanceByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield new Promise((resolve, reject) => {
            db_1.default.query(users_queries_1.FIND_USER_BY_EMAIL, [email], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                resolve(result);
            });
        });
        return users[0];
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleUserExistanceByEmail = handleUserExistanceByEmail;
const handleUserExistance = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield new Promise((resolve, reject) => {
            db_1.default.query(users_queries_1.FIND_USER_QUERY, [email, password], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                resolve(result);
            });
        });
        return users[0];
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleUserExistance = handleUserExistance;
const handleUserPasswordHashing = (password) => {
    if (!password) {
        throw new Error('invalid params, password is required!');
    }
    try {
        const hashedPassword = crypto_js_1.default.SHA256(password).toString();
        return hashedPassword;
    }
    catch (err) {
        console.error(err);
    }
};
exports.handleUserPasswordHashing = handleUserPasswordHashing;
const handleUserPasswordHashedReversal = (password, hashedPassword) => {
    if (!password || !hashedPassword) {
        throw new Error('invalid params, password is required!');
    }
    try {
        const reversalHashedPassword = crypto_js_1.default.SHA256(password).toString();
        if (hashedPassword === reversalHashedPassword) {
            return hashedPassword;
        }
    }
    catch (err) {
        console.error(err);
    }
};
exports.handleUserPasswordHashedReversal = handleUserPasswordHashedReversal;
const handleGenerateToken = (data) => {
    if (!data) {
        throw new Error('invalid params');
    }
    try {
        const token = jsonwebtoken_1.default.sign(data, secret_key);
        return token;
    }
    catch (err) {
        console.error(err);
    }
};
exports.handleGenerateToken = handleGenerateToken;
//# sourceMappingURL=users.utils.js.map