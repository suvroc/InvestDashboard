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
  public fundName: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fundName = this.navParams.data.fundName;
  }

  ionViewDidLoad() {
    console.log('Hello AddTransactionPage Page');
  }

  public isFundDefined = () => {
    return !!this.fundName;
  }

}
