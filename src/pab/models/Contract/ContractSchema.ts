export type ContractSchema = {
    csrSchemas: [
        {
            argument: {
                tag: string,
                contents?: [string, { tag: string }][]
            },
            endpointDescription: {
                getEndpointDescription: string;
            }
        }
    ],
    csrDefinition: any;
}
