import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {FullReport} from "./models";
import {ContractSchema} from "./models/Contract/ContractSchema";
import {ContractStatus} from "./models/Contract/ContractStatus";

/**
 * This class allows users to interact with the Plutus Application Backend.
 */
export class PlutusPabService {
    private axios: AxiosInstance;

    constructor(baseUrl: string, config: AxiosRequestConfig) {
        this.axios = axios.create({...config, baseURL: baseUrl})
    }

    /**
     * @return FullReport The full PAB report
     */
    fullReport(): Promise<FullReport> {
        return this.axios.get('api/fullreport').then(res => res.data)
    }

    /**
     * Activate a PAB contract.
     *
     * @param contractName
     * @param walletId
     */
    activateContract(contractName: string, walletId: string): Promise<string> {
        return this.axios.post('api/contract/activate', {
            caID: {tag: contractName},
            caWallet: {getWalletID: walletId}
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.data.unContractInstanceId)
    }

    /**
     * Given a contract, fetch the instance status.
     *
     * @param contractInstanceId The contract instance id
     */
    contractStatus(contractInstanceId: string): Promise<ContractStatus> {
        return this.axios.get('api/contract/instance/' + contractInstanceId + '/status')
            .then(res => res.data)
    }

    /**
     * Given a contract, fetch its schema.
     *
     * @param contractInstanceId
     */
    contractSchema(contractInstanceId: string): Promise<ContractSchema> {
        return this.axios.get('api/contract/instance/' + contractInstanceId + '/schema')
            .then(res => res.data)
    }

    /**
     * Submit an endpoint for a given contract.
     *
     * @param contractInstanceId
     * @param endpointName
     * @param data
     */
    contractEndpoint(contractInstanceId: string, endpointName: string, data?: any): Promise<void> {
        return this.axios.post('api/contract/instance/' + contractInstanceId + '/endpoint/' + endpointName, data)
    }

    /**
     * Stop a contract.
     *
     * @param contractInstanceId
     */
    contractStop(contractInstanceId: string): Promise<void> {
        return this.axios.put('api/contract/instance/' + contractInstanceId + '/stop')
    }

    /**
     * Fetch all contract statuses.
     */
    getContracts(): Promise<ContractStatus[]> {
        return this.axios.get('api/contract/instances').then(res => res.data)
    }

    /**
     * Given a wallet, fetch all contracts.
     *
     * @param walletId
     */
    getContractsByWallet(walletId: string): Promise<ContractStatus[]> {
        return this.axios.get('api/contract/instances/wallet/' + walletId).then(res => res.data)
    }

    /**
     * Fetch all Contract Definitions
     */
    getContractDefinitions(): Promise<ContractSchema[]> {
        return this.axios.get('api/contract/definitions').then(res => res.data)
    }

    /**
     * Use the healthcheck endpoint to determine if the PAB is online.
     */
    online(): Promise<boolean> {
        return this.axios.get('api/healthcheck')
            .then(resp => resp.status === 200)
            .catch(() => false)
    }
}
