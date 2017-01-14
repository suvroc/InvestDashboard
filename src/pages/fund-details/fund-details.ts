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
  public fundName: string;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.fundName = params.get('fundName'); 
  }

  ionViewDidLoad() {
    console.log('Hello FundDetailsPage Page');
  }

  public addTransaction = () => {
    this.navCtrl.push(AddTransactionPage, { fundName: this.fundName });
  }

  public showTransactions = () => {
    this.navCtrl.push(TransactionListPage, { fundName: this.fundName });
  }
}

export class FundDetailsPageParams {
  public fundName: string;
}
