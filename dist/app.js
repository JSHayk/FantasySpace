"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = __importDefault(require("@/db/db"));
const config_1 = __importDefault(require("@/config/config"));
const router_1 = __importDefault(require("@/routes/router"));
const { port } = config_1.default;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use('/api', router_1.default);
db_1.default.getConnection((err, connection) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('DB connected!');
    connection.release();
});
app.listen(port, () => console.log(`Run on ${port}`));
//# sourceMappingURL=app.js.map