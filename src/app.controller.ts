import { Controller, Header, Body, Params, Get, Post, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Serie } from './Models/serie.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() serie: Serie): Promise<string> {
    return await this.appService.create(serie);
  }

  @Get()
  @Header('Content-Type', 'application/json')
  async getAll(): Promise<any> {
    return await this.appService.getAll();
  }

  @Delete(':id')
  delete(@Params() params: any): string {
    return this.appService.delete(params.id)
  }

  @Put()
  update(): string {
    return this.appService.update();
  }
}
