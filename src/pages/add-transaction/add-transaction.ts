import { FundData } from './../../models/fund-data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AddTransaction page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage {
  public fundData: FundData;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fundData = (this.navParams.data as AddTransactionPageParams).fundData;
  }

  ionViewDidLoad() {
    console.log('Hello AddTransactionPage Page');
  }

  public isFundDefined = () => {
    return !!this.fundData;
  }

}

export class AddTransactionPageParams {
  public fundData: FundData;
}
