type LogLevels = 'Debug' | 'Info' | 'Warning' | 'Error';
type Logs = [
    {
        _logMessageContent: string,
        _logLevel: LogLevels
    }
];
type Hooks = [
    {
        rqID: number;
        itID: number;
        rqRequest: {
            aeMetadata: any;
            aeDescription: {
                getEndpointDescription: string
            }
        }
    }
];
export type ContractState = {
    observableState: any;
    logs: Logs,
    hooks: Hooks,
    err: {
        contents: any;
        tag: string;
    } | null;
    lastLogs: Logs;
}
