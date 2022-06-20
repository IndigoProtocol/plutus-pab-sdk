import {ContractState} from "./ContractState";

export type ContractStatus = {
    cicCurrentState: ContractState,
    cicContract: {
        unContractInstanceId: string
    },
    cicWallet: { getWalletId: string },
    cicDefinition: any
}
