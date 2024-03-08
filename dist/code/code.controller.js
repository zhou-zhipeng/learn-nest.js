"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeController = void 0;
const common_1 = require("@nestjs/common");
let CodeController = exports.CodeController = class CodeController {
    create() {
        return 'This action adds a new cat';
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(504),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CodeController.prototype, "create", null);
exports.CodeController = CodeController = __decorate([
    (0, common_1.Controller)('code')
], CodeController);
//# sourceMappingURL=code.controller.js.map