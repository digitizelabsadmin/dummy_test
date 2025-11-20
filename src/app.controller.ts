import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<object> {
    return await this.appService.getHello();
  }

  @Get('/getAggregated')
  async getAggregated(
    @Query('ActivityCloseDateFrom') startDate: string,
    @Query('ActivityCloseDateTo') endDate: Date
  ): Promise<object> {
    const stDate = new Date(startDate)
    const edDate = new Date(endDate)

    return await this.appService.getAggregated(stDate, edDate);
  }
}
