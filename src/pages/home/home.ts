import { AddTransactionPage } from './../add-transaction/add-transaction';
import { FundDetailsPage, FundDetailsPageParams } from './../fund-details/fund-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public showDetails = (name: string) => {
    this.navCtrl.push(FundDetailsPage, { fundName: name } as FundDetailsPageParams);
  }

  public addTransaction = () => {
    this.navCtrl.push(AddTransactionPage);
  }

}
