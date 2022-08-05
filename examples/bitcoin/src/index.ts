import { CanisterResult, Update } from 'azle';
import {
    ManagementCanister,
    BitcoinGetUtxosResult,
    Satoshi
} from 'azle/canisters/management';
import { GetUtxosResult, GetBalanceResult } from './types';

export function* get_utxos(address: string): Update<GetUtxosResult> {
    const canister_result: CanisterResult<BitcoinGetUtxosResult> =
        yield ManagementCanister.bitcoin_get_utxos({
            address,
            filter: null,
            network: { Regtest: null }
        }).with_cycles(100_000_000n);

    return canister_result;
}

export function* get_balance(address: string): Update<GetBalanceResult> {
    const canister_result: CanisterResult<Satoshi> =
        yield ManagementCanister.bitcoin_get_balance({
            address,
            min_confirmations: null,
            network: { Regtest: null }
        }).with_cycles(100_000_000n);

    return canister_result;
}
