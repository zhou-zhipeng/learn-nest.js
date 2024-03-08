import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('nofound')
export class NofoundController {
  @Get()
  @Redirect('/')
  redirectToNewRoute() {}
}
