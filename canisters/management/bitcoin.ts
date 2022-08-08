import { blob, nat32, nat64, Opt, Variant } from '../../index';

export type Address = string;
export type BlockHash = blob;
export type Fee = MillisatoshiPerByte;

export type GetBalanceArgs = {
    network: Network;
    address: Address;
    min_confirmations: Opt<nat32>;
};

export type GetCurrentFeePercentilesArgs = {
    network: Network;
};

export type GetUtxosArgs = {
    address: Address;
    filter: Opt<UtxosFilter>;
    network: Network;
};

export type GetUtxosResult = {
    next_page: Opt<Page>;
    tip_block_hash: BlockHash;
    tip_height: nat32;
    utxos: Utxo[];
};

export type MillisatoshiPerByte = nat64;

export const Network = {
    Mainnet: { Mainnet: null },
    Regtest: { Regtest: null },
    Testnet: { Testnet: null }
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
