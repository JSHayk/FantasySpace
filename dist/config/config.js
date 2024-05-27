"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT) || 4001,
    sync_interval: Number(process.env.sync_interval) || 3000,
    db: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
    token: {
        secret_key: process.env.TOKEN_SECRET_KEY,
    },
};
exports.default = Object.freeze(config);
//# sourceMappingURL=config.js.map