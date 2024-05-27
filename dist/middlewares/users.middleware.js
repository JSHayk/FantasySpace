"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTokenValidation = exports.handleUserValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validator_1 = __importDefault(require("validator"));
const config_1 = __importDefault(require("@/config/config"));
const constants_1 = require("@/constants/constants");
const users_constants_1 = require("@/constants/users.constants");
const { token: { secret_key }, } = config_1.default;
const handleUserValidation = (req, res, next) => {
    const { email, password } = req.body;
    if (!email)
        return res
            .status(constants_1.STATUS_CODE_FAILED)
            .send({ message: 'email is required!' });
    if (!password)
        return res
            .status(constants_1.STATUS_CODE_FAILED)
            .send({ message: 'password is required!' });
    if (!validator_1.default.isEmail(email)) {
        return res.status(constants_1.STATUS_CODE_FAILED).send({ message: users_constants_1.USER_EMAIL_MESSAGE });
    }
    if (!validator_1.default.isStrongPassword(password)) {
        return res
            .status(constants_1.STATUS_CODE_FAILED)
            .send({ message: users_constants_1.USER_PASSWORD_MESSAGE });
    }
    req.data = {
        email,
        password,
    };
    next();
};
exports.handleUserValidation = handleUserValidation;
const handleTokenValidation = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res
                .status(constants_1.STATUS_CODE_ACCESS_DENIED)
                .json({ message: 'Unauthorized: No token provided' });
        }
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret_key, (err, decoded) => {
            if (err) {
                return res
                    .status(constants_1.STATUS_CODE_ACCESS_DENIED)
                    .json({ message: users_constants_1.USER_INVALID_TOKEN_MESSAGE });
            }
            req.userId = decoded.id;
            next();
        });
    }
    catch (err) {
        return res
            .status(constants_1.STATUS_CODE_SERVER_ERROR)
            .send({ message: 'Server error' });
    }
};
exports.handleTokenValidation = handleTokenValidation;
//# sourceMappingURL=users.middleware.js.map