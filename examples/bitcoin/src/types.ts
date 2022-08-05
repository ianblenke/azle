import { Variant } from 'azle';
import { GetUtxosResult, Satoshi } from 'azle/canisters/management/bitcoin';

export type ExecuteGetUtxosResult = Variant<{
    ok: GetUtxosResult;
    err: string;
}>;

export type ExecuteGetBalanceResult = Variant<{
    ok: Satoshi;
    err: string;
}>;
