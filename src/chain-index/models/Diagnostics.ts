import {TxId} from "./TxId";

export type Diagnostics = {
    numTransactions: number,
    numScripts: number,
    numAddresses: number,
    numAssetClasses: number,
    numUnspentOutputs: number,
    numUnmatchedInputs: number,
    someTransactions: TxId[]
};
