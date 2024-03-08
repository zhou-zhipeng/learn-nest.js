import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { OrderModule } from '../src/order/order.module';

describe('OrderController (e2e)', () => {
  let order: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OrderModule],
    }).compile();

    order = moduleFixture.createNestApplication();
    await order.init();
  });

  it('/order (GET)', () => {
    return request(order.getHttpServer())
      .get('/order')
      .expect(200)
      .expect('查询订单');
  });
});
