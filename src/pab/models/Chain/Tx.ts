import {Credential} from "../../../chain-index";

export type UtxoIndex = {
    getIndex: Map<TxOutRef, TxOut>;
}

type TxIn = {
    txInRef: TxOutRef,
    txInType?: TxInType
}

type TxOutRef = {
    txOutRefId: TxId;
    txOutRefIdx: number;
}

type TxInType = {
    tag: 'ConsumeScriptAddress';
    contents: [Validator, Redeemer, Datum];
} | {
    tag: 'ConsumePublicKeyAddress';
} | {
    tag: 'ConsumeSimpleScriptAddress';
};

type Validator = {
    getValidator: any
}

type TxOut = {
    txOutAddress: Address;
    txOutValue: Value;
    txOutDatumHash?: DatumHash;
}

type Address = {
    addressCredential: Credential;
    addressStakingCredential: StakingCredential | null;
}

type StakingCredential = {
    tag: 'StakingHash',
    contents: Credential
} | {
    tag: 'StakingPtr',
    contents: [number, number, number]
};

type Map<k, v> = [k, v][];
type PabMap<k, v> = Record<string, v>;
type CurrencySymbol = { unCurrencySymbol: string };
type TokenName = { unTokenName: string };
type Value = {
    getValue: Map<CurrencySymbol, Map<TokenName, number>>
}
type TxId = {
    getTxId: string
};
type BeneficialOwner = {
    tag: 'OwnedByPubKey';
    contents: {
        getPubKeyHash: string;
    };
} | {
    tag: 'OwnedByScript';
    contents: string;
};

type DereferencedInput = {
    tag: 'DereferencedInput';
    originalInput: TxIn;
    refersTo: TxOut;
} | {
    tag: 'InputNotFound';
    contents: {
        _txKeyTxId: TxId;
        _txKeyTxOutRefIdx: number;
    };
};

export type AnnotatedTx = {
    sequenceId: {
        slotIndex: number;
        txIndex: number;
    };
    txId: TxId;
    tx: Tx;
    dereferencedInputs: DereferencedInput[];
    balances: PabMap<BeneficialOwner, Value>;
    valid: boolean;
};

type Interval<V> = { ivFrom: [Extended<V>, boolean], ivTo: [Extended<V>, boolean] };
type Extended<V> = {
    tag: 'NegInf'
} | {
    tag: 'Finite',
    contents: V
} | {
    tag: 'PosInf'
};

type Slot = {
    getSlot: number
}

type PubKey = {
    getPubKey: {
        getLedgerBytes: string;
    };
}

type Signature = {
    getSignature: string
}

type RedeemerPtr = ['Spend' | 'Mint' | 'Cert' | 'Reward', number];
type Redeemer = { getRedeemer: Data };
type Data = Constr | DataMap | List | I | B;
type Constr = {
    tag: 'Constr',
    contents: [number, Data[]]
}
type DataMap = {
    tag: 'Map',
    contents: [Data, Data][]
}
type List = {
    tag: 'List',
    contents: Data[]
}
type I = {
    tag: 'I',
    contents: number
}
type B = {
    tag: 'B',
    contents: string
}

type DatumHash = string;

type Datum = Data;

export type Tx = {
    txInputs: TxIn[];
    txCollateral: TxIn[];
    txOutputs: TxOut[];
    txMint: Value;
    txFee: Value;
    txValidRange: Interval<Slot>;
    txMintScripts: {
        getMintingPolicy: any
    }[];
    txSignatures: PabMap<PubKey, Signature>;
    txRedeemers: PabMap<RedeemerPtr, Redeemer>;
    txData: PabMap<DatumHash, Datum>;
}
