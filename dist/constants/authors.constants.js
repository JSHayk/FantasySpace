"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHOR_BIRTH_DATE_MESSAGE = exports.AUTHOR_BIOGRAHPY_MESSAGE = exports.AUTHOR_NAME_MESSAGE = exports.DELETE_AUTHOR_RESPONSE = exports.UPDATE_AUTHOR_RESPONSE = exports.ADD_AUTHOR_RESPONSE = exports.AUTHOR_EXIST_RESPONSE = exports.AUTHOR_NO_EXIST_RESPONSE = void 0;
const constants_1 = require("./constants");
exports.AUTHOR_NO_EXIST_RESPONSE = {
    status: constants_1.STATUS_CODE_FAILED,
    message: 'There is no author with this id',
};
exports.AUTHOR_EXIST_RESPONSE = {
    status: constants_1.STATUS_CODE_FAILED,
    message: 'There is already author with this name',
};
exports.ADD_AUTHOR_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The author was added',
};
exports.UPDATE_AUTHOR_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The author was updated',
};
exports.DELETE_AUTHOR_RESPONSE = {
    status: constants_1.STATUS_CODE_SUCCESS,
    message: 'The author was deleted',
};
exports.AUTHOR_NAME_MESSAGE = 'name must contain min 4 characters!';
exports.AUTHOR_BIOGRAHPY_MESSAGE = 'biography must contain min 15 characters!';
exports.AUTHOR_BIRTH_DATE_MESSAGE = 'birth date must be valid Date!';
//# sourceMappingURL=authors.constants.js.map