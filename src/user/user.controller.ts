import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
/* import { OrderService } from 'src/order/order.service'; */

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService /* private readonly orderModule: OrderService, */,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /*  @Get()
  findAll() {
    return this.userService.findAll(req);
  } */

  /* 获取系统的一些配置参数 */
  /*  @Get()
  findAll(@Req() req: object) {
    // console.log(req, 'req');
    return this.userService.findAll();
  } */

  @Get()
  findAll(@Req() req: object) {
    // console.log(req, 'req');
    /* this.orderModule.getOrder(); */
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
