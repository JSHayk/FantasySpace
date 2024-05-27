"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("@config/config"));
var general_router_1 = __importDefault(require("@routes/general.router"));
var port = config_1.default.port;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use('/api', general_router_1.default);
app.listen(port, function () { return console.log("Run on ".concat(port)); });
