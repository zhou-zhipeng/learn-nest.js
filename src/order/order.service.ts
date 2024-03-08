import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private readonly order: string = '';

  getOrder(): string {
    return '查询订单';
  }
  getAll(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  getOne(id: number): string {
    console.log(typeof id, id);
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
      {
        cause: Error,
      },
    );
  }
}
