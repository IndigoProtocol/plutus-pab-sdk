type CurrencySymbol = {
    unCurrencySymbol: string
}

type TokenName = {
    unTokenName: string
};

export type AssetClass = {
    unAssetClass: [CurrencySymbol, TokenName]
}
