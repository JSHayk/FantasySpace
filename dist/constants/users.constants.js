"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_INVALID_TOKEN_MESSAGE = exports.USER_PASSWORD_MESSAGE = exports.USER_EMAIL_MESSAGE = exports.USER_ACCESS_DENIED_RESPONSE = exports.USER_EMAIL_NO_EXIST_RESPONSE = exports.USER_EMAIL_EXIST_RESPONSE = exports.USER_REGISTER_SUCCESS_RESPONSE = void 0;
const constants_1 = require("@/constants/constants");
exports.USER_REGISTER_SUCCESS_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'User was registered',
};
exports.USER_EMAIL_EXIST_RESPONSE = {
    status: constants_1.STATUS_CODE_FAILED,
    message: 'The email is already exist!',
};
exports.USER_EMAIL_NO_EXIST_RESPONSE = {
    status: constants_1.STATUS_CODE_FAILED,
    message: 'The email doesn"t exits!',
};
exports.USER_ACCESS_DENIED_RESPONSE = {
    status: constants_1.STATUS_CODE_ACCESS_DENIED,
    message: 'The password is invalid!',
};
exports.USER_EMAIL_MESSAGE = 'invalid email';
exports.USER_PASSWORD_MESSAGE = 'invalid password';
exports.USER_INVALID_TOKEN_MESSAGE = 'Unauthorized: Invalid token';
//# sourceMappingURL=users.constants.js.map