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
exports.login = void 0;
const config_1 = require("../../../config");
const env_1 = __importDefault(require("../../../config/env"));
const helpers_1 = require("../../../shared/helpers");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield config_1.prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
        },
    });
    const isCorrectPassword = yield bcryptjs_1.default.compare(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new Error('Password is incorrect!');
    }
    const accessToken = helpers_1.token.generateToken({ email: user.email, role: user.role }, env_1.default.jwt_access_token, '24h');
    const refreshToken = helpers_1.token.generateToken({ email: user.email, role: user.role }, env_1.default.jwt_refresh_token, '90d');
    return {
        accessToken,
        refreshToken,
        user,
    };
});
exports.login = login;
