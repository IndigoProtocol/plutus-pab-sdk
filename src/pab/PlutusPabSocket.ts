/**
 * This class allows interaction with a Plu
 */
export class PlutusPabSocket {
    private sockets: { [key: string]: WebSocket} = {};

    constructor(
        private socketUrl: string
    ) {
    }

    /**
     * Create a WebSocket connection.
     *
     * @param contractId
     */
    connect(contractId: string = 'root'): WebSocket {
        if (this.sockets[contractId])
            return this.sockets[contractId]

        return this.sockets[contractId] = new WebSocket(this.socketUrl);
    }

    /**
     * Retrieve a socket connection.
     *
     * @param contractId
     */
    getSocket(contractId: string = 'root'): WebSocket | undefined {
        return this.sockets[contractId]
    }
}
