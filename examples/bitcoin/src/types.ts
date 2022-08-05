import { Variant } from 'azle';
import { BitcoinGetUtxosResult, Satoshi } from 'azle/canisters/management';

export type GetUtxosResult = Variant<{
    ok: BitcoinGetUtxosResult;
    err: string;
}>;

export type GetBalanceResult = Variant<{
    ok: Satoshi;
    err: string;
}>;
