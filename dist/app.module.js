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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const code_controller_1 = require("./code/code.controller");
const nofound_controller_1 = require("./nofound/nofound.controller");
const order_module_1 = require("./order/order.module");
const user_module_1 = require("./user/user.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppModule = exports.AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('order*');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            order_module_1.OrderModule,
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'roottest',
                database: 'database',
                entities: [],
                autoLoadEntities: true,
                synchronize: true,
            }),
        ],
        controllers: [app_controller_1.AppController, nofound_controller_1.NofoundController, code_controller_1.CodeController],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map