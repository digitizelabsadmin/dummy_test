import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  private affilUsers: Array<number> = [2203]
  
  private endPlayers: Array<number> = [156, 157];

  private transactionTypes: Array<string> = ["Deposit"];
  
  private operationTypes: Array<number> = [1];

  async generateRandomString(length: number): Promise<string> {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomStr = '';
    
    for (let i = 0; i < length; i++) {
      randomStr += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return randomStr;
  }

  private getRandomItem<T>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generateRandomDate(): string {
    const start = new Date('2025-11-01');
    const end = new Date('2025-11-20');
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toISOString();
  }

  private generateRandomAmount(): number {
    return Math.round((Math.random() * 10000 + 100) * 10000) / 10000;
  }

  async getHello(): Promise<object[]> {
    const transactions = [];
    
    for (let i = 0; i < 20; i++) {
      transactions.push({
        "Player_Id": this.getRandomItem(this.endPlayers),
        "transaction_id": await this.generateRandomString(10),
        "transaction_Date": this.generateRandomDate(),
        "transaction_type": this.getRandomItem(this.transactionTypes),
        "transaction_amount": this.generateRandomAmount(),
        "transaction_currency": "NGN",
        "OperationType": this.getRandomItem(this.operationTypes)
      });
    }
    
    return transactions;
  }

  async getAggregated(): Promise<Array<{}>> {
  const statistics: Array<{}> = [] // Initialize as empty array

  for (let index = 0; index < 2; index++) {
    statistics.push({
      "player_id": this.endPlayers[index],
      "Date": this.generateRandomDate(),
      "CurrencyCode": "NGN",
      "NGR": this.generateRandomAmount(),
      "GGR": this.generateRandomAmount(),
      "Bet": this.generateRandomAmount(),
      "Win": this.generateRandomAmount(),
      "Deposit": this.generateRandomAmount(),
      "Withdraw": this.generateRandomAmount(),
      "BonusAmount": this.generateRandomAmount(),
      "BonusCancel": this.generateRandomAmount(),
      "AffId": this.affilUsers[0]
    })
  }
  
  return statistics // Return moved outside the loop
}

}