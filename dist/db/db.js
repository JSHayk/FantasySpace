"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("@/config/config"));
const { db: { host, username, password, name }, } = config_1.default;
const pool = mysql2_1.default.createPool({
    host: host,
    user: username,
    password: password,
    database: name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.default = pool;
//# sourceMappingURL=db.js.map