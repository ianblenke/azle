import { CanisterResult, Update } from 'azle';
import { Bitcoin, ManagementCanister } from 'azle/canisters/management';
import { GetUtxosResult, GetBalanceResult } from './types';

export function* get_utxos(address: string): Update<GetUtxosResult> {
    const canister_result: CanisterResult<Bitcoin.GetUtxosResult> =
        yield ManagementCanister.bitcoin_get_utxos({
            network: { Regtest: null },
            address
        });

    return canister_result;
}

export function* get_balance(address: string): Update<GetBalanceResult> {
    const canister_result: CanisterResult<Bitcoin.Satoshi> =
        yield ManagementCanister.bitcoin_get_balance({
            network: { Regtest: null },
            address
        });

    return canister_result;
}
