import {
    ChainIndexEndpointResponse,
    ChainIndexTxOut,
    TxOutRef,
    TxId,
    IsUtxoResponse,
    UtxoAtAddressRequest,
    UtxosResponse,
    UtxoWithCurrencyRequest,
    Tip,
    Diagnostics
} from "./models";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export class ChainIndexService {

    private axios: AxiosInstance;

    constructor(baseUrl: string, config: AxiosRequestConfig) {
        this.axios = axios.create({...config, baseURL: baseUrl})
    }

    healthcheck(): Promise<null> {
        return this.endpoint('healthcheck').then(null)
    }

    txOut(txOutRef: TxOutRef): Promise<ChainIndexTxOut> {
        return this.endpoint('tx-out', txOutRef).then(x => x as ChainIndexTxOut);
    }

    tx(txId: TxId): Promise<ChainIndexTxOut> {
        return this.endpoint('tx', txId).then(x => x as ChainIndexTxOut);
    }

    isUtxo(txOutRef: TxOutRef): Promise<IsUtxoResponse> {
        return this.endpoint('is-utxo', txOutRef).then(x => x as IsUtxoResponse);
    }

    utxoAtAddress(utxoAtAddressRequest: UtxoAtAddressRequest): Promise<UtxosResponse> {
        return this.endpoint('utxo-at-address', utxoAtAddressRequest).then(x => x as UtxosResponse)
    }

    utxoWithCurrency(utxoWithCurrencyRequest: UtxoWithCurrencyRequest): Promise<UtxosResponse> {
        return this.endpoint('utxo-with-currency', utxoWithCurrencyRequest).then(x => x as UtxosResponse)
    }

    tip(): Promise<Tip> {
        return this.axios('tip').then((resp: any) => resp.data as Tip);
    }

    collectGarbage(): Promise<null> {
        return this.axios('collect-garbage', {method: 'PUT'}).then(null);
    }

    diagnostics(): Promise<Diagnostics> {
        return this.axios('diagnostics').then((resp: any) => resp.data as Diagnostics);
    }

    endpoint(endpoint: string, data?: any): Promise<ChainIndexEndpointResponse> {
        return this.axios(endpoint, {data, method: 'POST'}).then((resp: any) => resp.data);
    }
}
