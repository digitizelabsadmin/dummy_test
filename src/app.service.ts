import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  private affilUsers: Array<string> = ["2203"]
  
  private endPlayers: Array<number> = [46, 47];

  private transactionTypes: Array<string> = [
  "Deposit",
  "Withdraw",
  "Bet",
  "Win",
  "Rollback Bet",
  "Rollback Win",
  "Free Spins Win",
  "Jackpot Win",
  "Promo Realization",
  "Bet Correction (Withdraw)",
  "BetCorrection (Deposit)",
  "Withdraw Exchange Fee",
  "Deposit Exchange Fee",
  "Deposit Transaction Fee",
  "Withdraw Transaction Fee",
  "Admin CashDesk Withdraw",
  "Admin CashDesk Deposit",
  "TipDealer",
  "Affiliate Commision",
  "Take Amount For Bonus",
  "Cancel Bonus",
  "Bonus Activation",
  "Deposit To Costume",
  "Deposit From Partner",
  "Withdraw To Costume",
  "Withdraw From Partner",
  "P2P Deposit  To Friend",
  "P2P Deposit  From Friend",
  "Cash Bonus",
  "Exchange Currency Withdraw From Wallet",
  "Exchange Currency Deposit To Wallet",
  "Rollback Deposit",
  "PointConvertation",
  "EXCHANGE DEBIT FIAT BALANCE",
  "EXCHANGE CREDIT CBET TOKEN WALLET",
  "EXCHANGE DEBIT CBET TOKEN WALLET",
  "EXCHANGE CREDIT FIAT BALANCE",
  "EXCHANGE DEBIT CBET TOKEN WALLET",
  "EXCHANGE CREDIT FIAT BALANCE",
  "CBET CashDesk Deposit",
  "CBET CashDesk Withdraw",
  "Swap Fee CBET",
  "Swap Fee Fiat",
  "User Inactivity Fee",
  "Cash Bonus CBET Coin",
  "Cash Bonus CBET Fiat",
  "LeaderBoard Cash Deposit",
  "Crypto Cashback",
  "Loyalty Cash Deposit"
];
  
  private operationTypes: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];

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
    const start = new Date('2025-01-01');
    const end = new Date('2025-12-31');
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
}