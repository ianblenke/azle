import { CanisterResult, Update } from 'azle';
import { ManagementCanister } from 'azle/canisters/management';
import {
    GetUtxosResult,
    Fee,
    Network,
    Satoshi
} from 'azle/canisters/management/bitcoin';
import {
    ExecuteGetUtxosResult,
    ExecuteGetBalanceResult,
    ExecuteGetCurrentFeePercentiles
} from './types';

const BitcoinApiCycleCost = 100_000_000n;

export function* get_utxos(address: string): Update<ExecuteGetUtxosResult> {
    const canister_result: CanisterResult<GetUtxosResult> =
        yield ManagementCanister.bitcoin_get_utxos({
            address,
            filter: null,
            network: Network.Regtest
        }).with_cycles(BitcoinApiCycleCost);

    return canister_result;
}

export function* get_balance(address: string): Update<ExecuteGetBalanceResult> {
    const canister_result: CanisterResult<Satoshi> =
        yield ManagementCanister.bitcoin_get_balance({
            address,
            min_confirmations: null,
            network: Network.Regtest
        }).with_cycles(BitcoinApiCycleCost);

    return canister_result;
}

export function* get_current_fee_percentiles(): Update<ExecuteGetCurrentFeePercentiles> {
    const canister_result: CanisterResult<Fee[]> =
        yield ManagementCanister.bitcoin_get_current_fee_percentiles({
            network: Network.Regtest
        }).with_cycles(BitcoinApiCycleCost);

    return canister_result;
}
