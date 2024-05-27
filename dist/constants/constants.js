"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_ERROR_RESPONSE = exports.INVALID_ID_MESSAGE = exports.STATUS_CODE_SERVER_ERROR = exports.STATUS_CODE_ACCESS_DENIED = exports.STATUS_CODE_INVALID = exports.STATUS_CODE_FAILED = exports.STATUS_CODE_SUCCESS = void 0;
exports.STATUS_CODE_SUCCESS = 200;
exports.STATUS_CODE_FAILED = 404;
exports.STATUS_CODE_INVALID = 400;
exports.STATUS_CODE_ACCESS_DENIED = 403;
exports.STATUS_CODE_SERVER_ERROR = 500;
exports.INVALID_ID_MESSAGE = 'Invalid id!';
exports.SERVER_ERROR_RESPONSE = {
    status: exports.STATUS_CODE_SERVER_ERROR,
    message: 'Server Error!',
};
//# sourceMappingURL=constants.js.map