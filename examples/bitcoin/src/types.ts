import { Variant } from 'azle';
import { Bitcoin } from 'azle/canisters/management';

export type GetUtxosResult = Variant<{
    ok: Bitcoin.GetUtxosResult;
    err: string;
}>;

export type GetBalanceResult = Variant<{
    ok: Bitcoin.Satoshi;
    err: string;
}>;
