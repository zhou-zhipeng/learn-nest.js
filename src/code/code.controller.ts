import { Controller, HttpCode, Post } from '@nestjs/common';

@Controller('code')
export class CodeController {
  @Post()
  @HttpCode(504)
  create() {
    return 'This action adds a new cat';
  }
}
