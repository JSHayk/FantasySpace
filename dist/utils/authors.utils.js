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
exports.handleAuthorExistanceByName = exports.handleAuthorExistanceById = void 0;
const constants_1 = require("@/constants/constants");
const db_1 = __importDefault(require("@/db/db"));
const authors_queries_1 = require("@/queries/authors.queries");
const handleAuthorExistanceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield new Promise((resolve, reject) => {
            db_1.default.query(authors_queries_1.GET_AUTHOR__QUERY, [id], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                resolve(result);
            });
        });
        return authors[0];
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleAuthorExistanceById = handleAuthorExistanceById;
const handleAuthorExistanceByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield new Promise((resolve, reject) => {
            db_1.default.query(authors_queries_1.GET_AUTHOR_BY_NAME_QUERY, [name], (err, result) => {
                if (err)
                    return resolve(constants_1.SERVER_ERROR_RESPONSE);
                resolve(result);
            });
        });
        return authors[0];
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleAuthorExistanceByName = handleAuthorExistanceByName;
//# sourceMappingURL=authors.utils.js.map