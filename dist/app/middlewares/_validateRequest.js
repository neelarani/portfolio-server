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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const shared_1 = require("../../shared");
const validateRequest = (zs) => (0, shared_1.catchAsync)((req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    req.body = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.data)
        ? yield zs.parseAsync(JSON.parse(req.body.data))
        : yield zs.parseAsync(req.body);
    next();
}));
exports.validateRequest = validateRequest;
