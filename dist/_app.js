"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const middlewares_1 = require("./app/middlewares");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:3000',
        'https://portfolio-client-beryl.vercel.app',
    ],
    credentials: true,
}));
// app.use(compression());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Default route for testing
app.get('/', (_req, res) => {
    res.send('API is running');
});
app.use('/api/v1', routes_1.default);
// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route Not Found',
    });
});
app.use(middlewares_1.defaultError);
exports.default = app;
