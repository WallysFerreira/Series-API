import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(): string {
    return this.appService.create();
  }

  @Get()
  getAll(): string {
    return this.appService.getAll();
  }

  @Delete()
  delete(): string {
    return this.appService.delete()
  }

  @Put()
  update(): string {
    return this.appService.update();
  }
}
