import { Test, TestingModule } from '@nestjs/testing';
import { NofoundController } from './nofound.controller';

describe('NofoundController', () => {
  let controller: NofoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NofoundController],
    }).compile();

    controller = module.get<NofoundController>(NofoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
