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
exports.handleBookExistanceByEmail = void 0;
const db_1 = __importDefault(require("@/db/db"));
const constants_1 = require("@/constants/constants");
const books_queries_1 = require("@/queries/books.queries");
const handleBookExistanceByEmail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new Error('invalid params, must provide id!');
    const books = yield new Promise((resolve, reject) => {
        db_1.default.query(books_queries_1.FIND_BOOK_QUERY, [id], (err, result) => {
            if (err)
                return resolve(constants_1.SERVER_ERROR_RESPONSE);
            resolve(result);
        });
    });
    return {
        data: books,
        status: constants_1.STATUS_CODE_SUCCESS,
    };
});
exports.handleBookExistanceByEmail = handleBookExistanceByEmail;
//# sourceMappingURL=books.utils.js.map