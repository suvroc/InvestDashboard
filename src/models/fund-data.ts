import { FundTransaction } from './fund-transaction';
import { Fund } from './fund';

export class FundData {
    public fund: Fund;
    public transactions: FundTransaction[];
}