"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = (0, express_1.default)();
router.get('/', function (req, res) {
    res.status(200).send('OK');
});
exports.default = router;
