# Plutus PAB TypeScript SDK

This package provides a TypeScript client for the Plutus Application Backend. This package will allow developers to
interact with the Plutus Application Backend and ChainIndex service.

The Plutus Application Backend is a critical component when interacting with Plutus smart contracts. The API that the
PAB provides allows PAB clients to interact with contract application instances. Contract endpoints which are exposed by
running instances can be called via the client API.

## API Reference

### Demos

#### Activating Contract
```typescript
import {PlutusPabService} from 'plutus-pab-sdk';

const pabService = new PlutusPabService('https://localhost:9080')
const contractResponse = await pabService.activateContract(
    'Oracle', // Contract Name
    {oracleNft: ''}, // Contract Data
    2 // Wallet Id
);

// contractResponse.unContractInstanceId is contract instance id
```

#### Calling Contract Endpoint
```typescript
await pabService.contractEndpoint(
    contractResponse.unContractInstanceId, // Contract Id
    'FeedPrice', // Contract Endpoint
    {asset: 'iBTC', price: 980} // Endpoint Data
)
```

#### Fetching Contract Status
```typescript
const status = await pabService.contractEndpoint(
    contractResponse.unContractInstanceId // Contract Id
)

// status.cicCurrentState is the contract state.
```

#### Websocket
```typescript 
const websocket = pabService.websocket();

websocket.onmessage = this.onWebSocketMessage.bind(this);
websocket.onerror = this.onWebSocketError.bind(this);
websocket.onopen = this.onWebSocketOpen.bind(this);
```

#### Chain Index
```typescript
import {ChainIndexService} from 'plutus-pab-sdk';
const chainIndex = new ChainIndexService('https://localhost:9083')

const tip = chainIndex.tip();

// tip.tipSlot.getSlot -- Current slot
// tip.tipBlockId -- Current Block
```

### To Do

- [x] Product Vision
- [x] Develop
- [ ] Production Version
- [ ] Types & Documentation
- [ ] Tests
