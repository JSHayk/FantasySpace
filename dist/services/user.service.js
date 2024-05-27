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
exports.handleRegister = void 0;
const constants_1 = require("@/constants/constants");
const queries_constants_1 = require("@/constants/queries.constants");
const user_constants_1 = require("@/constants/user.constants");
const db_1 = __importDefault(require("@/db/db"));
const handleRegister = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, }) {
    try {
        new Promise((resolve, reject) => {
            db_1.default.query(queries_constants_1.REGISTER_QUERY, [email, password], (err, result) => {
                if (err)
                    return reject(constants_1.SERVER_ERROR_RESPONSE);
                resolve();
            });
        });
        return user_constants_1.USER_REGISTER_SUCCESS_RESPONSE;
    }
    catch (err) {
        console.error(err);
    }
});
exports.handleRegister = handleRegister;
//# sourceMappingURL=user.service.js.map