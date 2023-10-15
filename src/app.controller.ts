import { Controller, Body, Get, Post, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Serie } from './Models/serie.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() serie: Serie): string {
    return this.appService.create(serie);
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
