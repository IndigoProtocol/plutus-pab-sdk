type PublicKeyChainIndexTxOut = {
    _ciTxOutAddress: string,
    _ciTxOutValue: string // TODO: Value
}

type ScriptChainIndexTxOut = {
    _ciTxOutAddress: string,
    _ciTxOutValidator: string // TODO: Either ValidatorHash Validator
    _ciTxOutDatum: string // TODO: Either DatumHash Datum
    _ciTxOutValue: string // TODO: Value
}

export type ChainIndexTxOut = PublicKeyChainIndexTxOut | ScriptChainIndexTxOut;
