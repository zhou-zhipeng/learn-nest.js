import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CodeController } from './code/code.controller';
import { NofoundController } from './nofound/nofound.controller';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    OrderModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'roottest',
      database: 'database',
      entities: [],
      // entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, NofoundController, CodeController],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('order*');
  }
}
