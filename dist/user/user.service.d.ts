import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserList } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
export declare class UserService {
    private usersRepository;
    private dataSource;
    constructor(usersRepository: Repository<User>, dataSource: DataSource);
    create(createUserDto: CreateUserDto): Promise<{
        code: string;
        data: string;
        msg: string;
    }>;
    findAll(): Promise<UserList>;
    findOne(id: number): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
