import { TransactionListPage } from './../pages/transaction-list/transaction-list';
import { FundChartComponent } from './../components/fund-chart/fund-chart';
import { AddTransactionPage } from './../pages/add-transaction/add-transaction';
import { FundDetailsPage } from './../pages/fund-details/fund-details';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FundDetailsPage,
    AddTransactionPage,
    FundChartComponent,
    TransactionListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FundDetailsPage,
    AddTransactionPage,
    FundChartComponent,
    TransactionListPage
  ],
  providers: []
})
export class AppModule {}
