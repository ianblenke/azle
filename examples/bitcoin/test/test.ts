import { execSync } from 'child_process';
import { deploy, ok, run_tests, Test } from 'azle/test';
import { createActor } from '../test/dfx_generated/bitcoin';

const bitcoin_canister = createActor('rrkah-fqaaa-aaaaa-aaaaq-cai', {
    agentOptions: {
        host: 'http://127.0.0.1:8000'
    }
});

// execSync(`npm run bitcoind`, { stdio: 'inherit' });

const BITCOIN_ADDRESS = 'n3KHD2wqHASNYZ57UYJojeaKoG8VttESYq';

const tests: Test[] = [
    ...deploy('bitcoin'),
    {
        name: 'get_balance',
        test: async () => {
            const result = await bitcoin_canister.get_balance(BITCOIN_ADDRESS);

            if (!ok(result)) {
                return {
                    err: result.err
                };
            }

            return {
                ok: result.ok === 0n
            };
        }
    },
    {
        name: 'get_balance',
        prep: async () => {
            execSync(`npm run mine 1 ${BITCOIN_ADDRESS}`, {
                stdio: 'inherit'
            });
        }
    },
    {
        name: 'get_balance',
        test: async () => {
            const result = await bitcoin_canister.get_balance(BITCOIN_ADDRESS);

            if (!ok(result)) {
                return {
                    err: result.err
                };
            }

            return {
                ok: result.ok === 5_000_000_000n
            };
        }
    }
];

run_tests(tests);
