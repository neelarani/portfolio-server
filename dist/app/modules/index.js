"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = exports.ProjectRoutes = exports.PostRoutes = exports.AuthRoutes = void 0;
var auth_routes_1 = require("./auth/auth.routes");
Object.defineProperty(exports, "AuthRoutes", { enumerable: true, get: function () { return __importDefault(auth_routes_1).default; } });
var post_routes_1 = require("./post/post.routes");
Object.defineProperty(exports, "PostRoutes", { enumerable: true, get: function () { return __importDefault(post_routes_1).default; } });
var project_routes_1 = require("./project/project.routes");
Object.defineProperty(exports, "ProjectRoutes", { enumerable: true, get: function () { return __importDefault(project_routes_1).default; } });
var user_routes_1 = require("./user/user.routes");
Object.defineProperty(exports, "UserRoutes", { enumerable: true, get: function () { return __importDefault(user_routes_1).default; } });
