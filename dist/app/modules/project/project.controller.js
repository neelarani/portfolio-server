"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getSingleProject = exports.getAllProject = exports.createProject = void 0;
const shared_1 = require("../../../shared");
const service = __importStar(require("./project.service"));
const _httpCodes_1 = require("../../../shared/constants/_httpCodes");
exports.createProject = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const project = yield service.createProject(payload, req.file);
    (0, shared_1.sendResponse)(res, {
        success: true,
        status: _httpCodes_1.HTTP_CODE.CREATED,
        message: 'Project added successFully!',
        data: project,
    });
}));
exports.getAllProject = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield service.getAllProject();
    (0, shared_1.sendResponse)(res, {
        success: true,
        status: _httpCodes_1.HTTP_CODE.OK,
        message: 'Project Retreive successFully!',
        data: project,
    });
}));
exports.getSingleProject = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const project = yield service.getSingleProject(id);
    (0, shared_1.sendResponse)(res, {
        success: true,
        status: _httpCodes_1.HTTP_CODE.OK,
        message: 'Project Retreive successFully!',
        data: project,
    });
}));
exports.updateProject = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const data = req.body;
    const project = yield service.updateProject(id, data);
    (0, shared_1.sendResponse)(res, {
        success: true,
        status: _httpCodes_1.HTTP_CODE.OK,
        message: 'Project Updated successFully!',
        data: project,
    });
}));
exports.deleteProject = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const project = yield service.deleteProject(id);
    (0, shared_1.sendResponse)(res, {
        success: true,
        status: _httpCodes_1.HTTP_CODE.OK,
        message: 'Project Deleted successFully!',
        data: project,
    });
}));
