export const idlFactory = ({ IDL }) => {
    return IDL.Service({
        get_balance: IDL.Func([], [IDL.Text], ['query']),
        get_utxos: IDL.Func([IDL.Text], [], [])
    });
};
export const init = ({ IDL }) => {
    return [];
};
