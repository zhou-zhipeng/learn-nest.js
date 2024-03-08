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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UserService = exports.UserService = class UserService {
    constructor(usersRepository, dataSource) {
        this.usersRepository = usersRepository;
        this.dataSource = dataSource;
    }
    async create(createUserDto) {
        const { firstName, lastName, isActive } = createUserDto;
        try {
            await this.usersRepository
                .createQueryBuilder('user')
                .insert()
                .into(user_entity_1.User)
                .values([{ firstName, lastName, isActive: !!Number(isActive) }])
                .execute();
            return {
                code: '200',
                data: '',
                msg: 'success',
            };
        }
        catch (error) {
            return {
                code: 'E500',
                data: JSON.stringify(error),
                msg: 'error',
            };
        }
    }
    async findAll() {
        const data = await this.usersRepository
            .createQueryBuilder('user')
            .getMany();
        return {
            data,
            code: '200',
            msg: 'success',
        };
    }
    async findOne(id) {
        const data = await this.usersRepository
            .createQueryBuilder('user')
            .where('user.id = :id', { id: id })
            .getOne();
        return data;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UserService);
//# sourceMappingURL=user.service.js.map