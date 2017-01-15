import { FundData } from './../../models/fund-data';
import { TransactionListPage } from './../transaction-list/transaction-list';
import { AddTransactionPage } from './../add-transaction/add-transaction';
import { Component  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
declare var Chart;

/*
  Generated class for the FundDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fund-details',
  templateUrl: 'fund-details.html'
})
export class FundDetailsPage {
  public fundData: FundData;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.fundData = (params.data as FundDetailsPageParams).fundData;
  }

  ionViewDidLoad() {
    console.log('Hello FundDetailsPage Page');
  }

  public addTransaction = () => {
    this.navCtrl.push(AddTransactionPage, { fundData: this.fundData });
  }

  public showTransactions = () => {
    this.navCtrl.push(TransactionListPage, { fundData: this.fundData });
  }
}

export class FundDetailsPageParams {
  public fundData: FundData;
}
