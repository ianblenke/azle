import { deploy, ok, run_tests, Test } from 'azle/test';
import { createActor } from '../test/dfx_generated/bitcoin';

const bitcoin_canister = createActor('rrkah-fqaaa-aaaaa-aaaaq-cai', {
    agentOptions: {
        host: 'http://127.0.0.1:8000'
    }
});

const tests: Test[] = [
    ...deploy('bitcoin'),
    {
        name: 'execute get_balance',
        test: async () => {
            const result = await bitcoin_canister.get_balance();

            if (!ok(result)) {
                return {
                    err: result.err
                };
            }

            return {
                ok: result.ok === 0
            };
        }
    }
];

run_tests(tests);
