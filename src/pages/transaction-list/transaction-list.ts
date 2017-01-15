import { FundData } from './../../models/fund-data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TransactionList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transaction-list',
  templateUrl: 'transaction-list.html'
})
export class TransactionListPage {
  public fundData: FundData;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.fundData = (params.data as TransactionListPageParams).fundData;
  }

  ionViewDidLoad() {
    console.log('Hello TransactionListPage Page');
  }

}

export class TransactionListPageParams {
  public fundData: FundData;
}
