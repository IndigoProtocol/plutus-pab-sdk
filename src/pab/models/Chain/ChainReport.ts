import {AnnotatedTx, Tx, UtxoIndex} from "./Tx";

export type ChainReport = {
    transactionMap: { [key: string]: Tx };
    utxoIndex: UtxoIndex;
    annotatedBlockchain: AnnotatedTx[][];
}
