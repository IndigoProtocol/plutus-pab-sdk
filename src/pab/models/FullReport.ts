import ChainEvent from "./Chain/ChainEvent";
import {ContractReport} from "./Contract/ContractReport";
import {ChainReport} from "./Chain/ChainReport";

export type FullReport = {
    contractReport: ContractReport;
    chainReport: ChainReport;
    events: ChainEvent[];
}
