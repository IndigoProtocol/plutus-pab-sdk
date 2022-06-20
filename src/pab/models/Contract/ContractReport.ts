import {ContractState} from "./ContractState";
import {ContractSchema} from "./ContractSchema";

export type ContractReport = {
    crActiveContractStates: ContractState[],
    crAvailableContracts: [
        { unContractInstanceId: string },
        ContractSchema
    ]
}
