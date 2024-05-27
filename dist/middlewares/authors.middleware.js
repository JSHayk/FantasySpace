"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAuthorValidation = void 0;
const validator_1 = __importDefault(require("validator"));
const authors_constants_1 = require("@/constants/authors.constants");
const constants_1 = require("@/constants/constants");
const handleAuthorValidation = (req, res, next) => {
    const { name, biography, birth_date } = req.body;
    const date = new Date(birth_date);
    if (typeof name !== 'string' || !validator_1.default.isLength(name, { min: 4 })) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: authors_constants_1.AUTHOR_NAME_MESSAGE });
    }
    if (typeof biography !== 'string' ||
        !validator_1.default.isLength(biography, { min: 15 })) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: authors_constants_1.AUTHOR_BIOGRAHPY_MESSAGE });
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: authors_constants_1.AUTHOR_BIRTH_DATE_MESSAGE });
    }
    req.author = { name, biography, birth_date: date };
    next();
};
exports.handleAuthorValidation = handleAuthorValidation;
//# sourceMappingURL=authors.middleware.js.map