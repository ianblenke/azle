import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
    get_balance: ActorMethod<[], bigint>;
    get_utxos: ActorMethod<[string], undefined>;
}
