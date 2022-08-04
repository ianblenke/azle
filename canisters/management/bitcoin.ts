import { blob, nat32, nat64, Opt, Variant } from '../../index';

export type Address = string;
export type BlockHash = blob;

export type GetBalanceArgs = {
    network: Network;
    address: Address;
};

export type GetUtxosArgs = {
    address: Address;
    filter?: UtxosFilter;
    network: Network;
};

export type GetUtxosResult = {
    next_page: Opt<Page>;
    tip_block_hash: BlockHash;
    tip_height: nat32;
    utxos: Utxo[];
};

export type Network = Variant<{
    Mainnet: null;
    Regtest: null;
    Testnet: null;
}>;

export type Outpoint = {
    txid: blob;
    vout: nat32;
};

export type Page = blob;

export type Utxo = {
    height: nat32;
    outpoint: Outpoint;
    value: Satoshi;
};

export type UtxosFilter = Variant<{
    MinConfirmations: nat32;
    Page: Page;
}>;

export type Satoshi = nat64;
