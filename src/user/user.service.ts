import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserList } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { firstName, lastName, isActive } = createUserDto;
    try {
      await this.usersRepository
        .createQueryBuilder('user')
        .insert()
        .into(User)
        .values([{ firstName, lastName, isActive: !!Number(isActive) }])
        .execute();
      return {
        code: '200',
        data: '',
        msg: 'success',
      };
    } catch (error) {
      return {
        code: 'E500',
        data: JSON.stringify(error),
        msg: 'error',
      };
    }
  }
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
  async findAll(): Promise<UserList> {
    const data = await this.usersRepository
      .createQueryBuilder('user')
      .getMany();
    return {
      data,
      code: '200',
      msg: 'success',
    };
  }

  async findOne(id: number): Promise<User | null> {
    const data = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: id })
      .getOne();
    return data;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
