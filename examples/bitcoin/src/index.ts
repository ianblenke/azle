import { CanisterResult, Update } from 'azle';
import { ManagementCanister } from 'azle/canisters/management';
import { GetUtxosResult, Satoshi } from 'azle/canisters/management/bitcoin';
import { ExecuteGetUtxosResult, ExecuteGetBalanceResult } from './types';

export function* get_utxos(address: string): Update<ExecuteGetUtxosResult> {
    const canister_result: CanisterResult<GetUtxosResult> =
        yield ManagementCanister.bitcoin_get_utxos({
            address,
            filter: null,
            network: { Regtest: null }
        }).with_cycles(100_000_000n);

    return canister_result;
}

export function* get_balance(address: string): Update<ExecuteGetBalanceResult> {
    const canister_result: CanisterResult<Satoshi> =
        yield ManagementCanister.bitcoin_get_balance({
            address,
            min_confirmations: null,
            network: { Regtest: null }
        }).with_cycles(100_000_000n);

    return canister_result;
}
