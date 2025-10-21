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
const config_1 = require("../../config");
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function seedAdmin() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = process.env.ADMIN_EMAIL;
            const password = process.env.ADMIN_PASSWORD;
            if (!email || !password) {
                throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD not found in .env');
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            yield config_1.prisma.user.upsert({
                where: { email },
                update: {
                    name: 'Neela Rani',
                    password: hashedPassword,
                    role: client_1.Role.ADMIN,
                },
                create: {
                    name: 'Neela Rani',
                    email,
                    password: hashedPassword,
                    role: client_1.Role.ADMIN,
                },
            });
            console.log('Admin seeded successfully!');
        }
        catch (error) {
            console.error('Error creating/updating admin:', error);
        }
        finally {
            yield config_1.prisma.$disconnect();
        }
    });
}
exports.default = seedAdmin;
