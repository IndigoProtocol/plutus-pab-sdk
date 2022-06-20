type BlockNumber = { unBlockNumber: string }
type BlockId = { getBlockId: string };
type Slot = { getSlot: number };

type ChainIndexTip = {
    tipSlot: Slot,
    tipBlockId: BlockId,
    tipBlockNo: BlockNumber
}
type TipAtGenesis = {};

export type Tip = TipAtGenesis | ChainIndexTip;
