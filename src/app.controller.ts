import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { start } from 'repl';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTransactions(
    @Query('TransactionDateFrom') startDate: string,
    @Query('TransactionDateTo') endDate: string
  ): Promise<object> {
    const stDate = new Date(startDate)
    const edDate = new Date(endDate)
    return await this.appService.getTransactions(stDate, edDate);
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
