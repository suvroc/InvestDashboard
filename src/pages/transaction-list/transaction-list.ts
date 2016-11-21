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
  public fundName: string;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.fundName = params.get('fundName'); 
  }

  ionViewDidLoad() {
    console.log('Hello TransactionListPage Page');
  }

}
