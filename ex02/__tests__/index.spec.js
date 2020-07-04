
        const { compose } = require('../index')
describe('练习02 中间件实现', () => {
    it('同步函数' ,() => {
        const mockFn = jest.fn()
        const middlewares = [
            async next => {
                mockFn('1 start')
                next()
                mockFn('1 end')
            },
            async next => {
                mockFn('2 start')
                next()
                mockFn('2 end')
            }
        ]
        compose(middlewares)()
        
        const calls = mockFn.mock.calls
        expect(calls.length).toBe(4);
        expect(calls[0][0]).toBe('1 start');
        expect(calls[1][0]).toBe('2 start');
        expect(calls[2][0]).toBe('2 end');
        expect(calls[3][0]).toBe('1 end');
    })


    it('异步函数' ,async () => {
        const mockFn = jest.fn()
        const middlewares = [
            async next => {
                mockFn('1 start')
                await next()
                mockFn('1 end')
            },
            async next => {
                mockFn('2 start')
                await next()
                mockFn('2 end')
            }
        ]
        await compose(middlewares)()
        
        const calls = mockFn.mock.calls
        expect(calls.length).toBe(4);
        expect(calls[0][0]).toBe('1 start');
        expect(calls[1][0]).toBe('2 start');
        expect(calls[2][0]).toBe('2 end');
        expect(calls[3][0]).toBe('1 end');
    })


    it('混合同步异步的情况' ,async () => {
        const mockFn = jest.fn()
        const middlewares = [
            async next => {
                mockFn('1 start')
                next()
                mockFn('1 end')
            },
            next => {
                mockFn('2 start')
                mockFn('2 end')
            }
        ]
        await compose(middlewares)()
        
        const calls = mockFn.mock.calls
        expect(calls.length).toBe(4);
        expect(calls[0][0]).toBe('1 start');
        expect(calls[1][0]).toBe('2 start');
        expect(calls[2][0]).toBe('2 end');
        expect(calls[3][0]).toBe('1 end');
    })

    it('三个函数的情况' ,async () => {
        const mockFn = jest.fn()
        const middlewares = [
            async next => {
                mockFn('1 start')
                await next()
                mockFn('1 end')
            },
            async next => {
                mockFn('2 start')
                await next()
                mockFn('2 end')
            },
            async next => {
                mockFn('3 start')
                await next()
                mockFn('3 end')
            },
        ]
        await compose(middlewares)()
        
        const calls = mockFn.mock.calls
        expect(calls.length).toBe(6);
        expect(calls[0][0]).toBe('1 start');
        expect(calls[1][0]).toBe('2 start');
        expect(calls[2][0]).toBe('3 start');
        expect(calls[3][0]).toBe('3 end');
        expect(calls[4][0]).toBe('2 end');
        expect(calls[5][0]).toBe('1 end');
    })
})