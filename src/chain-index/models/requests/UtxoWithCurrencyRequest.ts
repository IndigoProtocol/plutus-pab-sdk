import {TxOutRef} from "../TxOutRef";
import {PageQuery} from "../pagination/PageQuery";
import {AssetClass} from "../AssetClass";

export interface UtxoWithCurrencyRequest {
    pageQuery?: PageQuery<TxOutRef>,
    currency: AssetClass
}
