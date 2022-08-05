export const idlFactory = ({ IDL }) => {
    const ExecuteGetBalanceResult = IDL.Variant({
        ok: IDL.Nat64,
        err: IDL.Text
    });
    const Outpoint = IDL.Record({
        txid: IDL.Vec(IDL.Nat8),
        vout: IDL.Nat32
    });
    const Utxo = IDL.Record({
        height: IDL.Nat32,
        value: IDL.Nat64,
        outpoint: Outpoint
    });
    const GetUtxosResult = IDL.Record({
        next_page: IDL.Opt(IDL.Vec(IDL.Nat8)),
        tip_height: IDL.Nat32,
        tip_block_hash: IDL.Vec(IDL.Nat8),
        utxos: IDL.Vec(Utxo)
    });
    const ExecuteGetUtxosResult = IDL.Variant({
        ok: GetUtxosResult,
        err: IDL.Text
    });
    return IDL.Service({
        get_balance: IDL.Func([IDL.Text], [ExecuteGetBalanceResult], []),
        get_utxos: IDL.Func([IDL.Text], [ExecuteGetUtxosResult], [])
    });
};
export const init = ({ IDL }) => {
    return [];
};
