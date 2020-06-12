


const { sender, brackets } = require('../index')

test('练习09 实现装饰器模式', () => {
    class Log {
        print(msg) {
            return msg
        }
    }
    brackets(Log, 'print')
    brackets(Log, 'print')
    const log = new Log()
    expect(log.print('Start')).toBe('[[Start]]')
})


test('练习09 实现装饰器工厂', () => {
    class Log {
        print(msg) {
            return msg
        }
    }
    sender('Server1')(Log, 'print')
    const log = new Log()
    expect(log.print('Start')).toBe('Server1 : Start')
})