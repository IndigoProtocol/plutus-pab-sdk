import {TxOutRef} from "../TxOutRef";
import {PageQuery} from "../pagination/PageQuery";

export interface UtxoAtAddressRequest {
    pageQuery?: PageQuery<TxOutRef>,
    credential: Credential
}
