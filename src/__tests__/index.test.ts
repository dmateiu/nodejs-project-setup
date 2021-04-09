import { start } from '../index';

// TODO remove on implementation
describe('index.ts', () => {
    it('returns `Hello World!`', async () => {
        const result = await start();

        expect(result).toStrictEqual('Hello World!');
    });
});
