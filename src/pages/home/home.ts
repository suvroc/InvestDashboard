import { FundStatistics } from './../../models/fund-statistics';
import { FundTransaction } from './../../models/fund-transaction';
import { FundData } from './../../models/fund-data';
import { FundPortfolio } from './../../models/fund-portfolio';
import { AddTransactionPage } from './../add-transaction/add-transaction';
import { FundDetailsPage, FundDetailsPageParams } from './../fund-details/fund-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public fundStatistics: FundStatistics[];

  constructor(public navCtrl: NavController) {
    this.fundStatistics = this.calculateStatistics();
  }

  public showDetails = (fund: FundData) => {
    this.navCtrl.push(FundDetailsPage, { fundData: fund } as FundDetailsPageParams);
  }

  public addTransaction = () => {
    this.navCtrl.push(AddTransactionPage);
  }

  private getCurentFundValue(fundData: FundData, currentRate: number): number {
    var fundValue = fundData.transactions.reduce<number>((prev: number, curr: FundTransaction)=> prev + curr.transactionAmount / curr.rate, 0);
    return fundValue * currentRate;
  }

  private getTransactionSum(fundData: FundData) {
    return fundData.transactions.reduce<number>((prev: number, curr: FundTransaction) => prev + curr.transactionAmount, 0);
  }

  public calculateStatistics(): FundStatistics[] {
    return this.getTestData().funds.map(fund => {
      var currentRate = 2;
      var currentValue = this.getCurentFundValue(fund, currentRate);
      var transactionSum = this.getTransactionSum(fund);
      var result = (currentValue - transactionSum) / transactionSum;
      return {
        fund: fund.fund,
        currentValue: currentValue,
        currentResult: result,
        absCurrentResult: Math.abs(result)
      } as FundStatistics
    });
  }

  private getTestData(): FundPortfolio {
    return {
      funds: [
        {
          fund: {
            name: "Pionnier"
          },
          transactions: [
            {
              date: new Date(),
              transactionAmount: 100,
              rate: 2
            },
            {
              date: new Date(),
              transactionAmount: 50,
              rate:2.1
            }
          ]
        },
        {
          fund: {
            name: "IKZE"
          },
          transactions: [
            {
              date: new Date(),
              transactionAmount: 100,
              rate: 1
            },
            {
              date: new Date(),
              transactionAmount: 50,
              rate: 1.9
            }
          ]
        },
        {
          fund: {
            name: "Uni Korona"
          },
          transactions: [
            {
              date: new Date(),
              transactionAmount: 100,
              rate: 2
            },
            {
              date: new Date(),
              transactionAmount: 50,
              rate:2.1
            }
          ]
        }
      ]
    }
  }

}
