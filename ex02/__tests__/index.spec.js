test('练习02 中间件实现', () => {
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
    const { compose } = require('../index')
    compose(middlewares)()
    
    const calls = mockFn.mock.calls
    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe('1 start');
    expect(calls[1][0]).toBe('2 start');
    expect(calls[2][0]).toBe('2 end');
    expect(calls[3][0]).toBe('1 end');
})