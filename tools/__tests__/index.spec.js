

test('加密程序验证', () => {
    const {createEncrypt} = require('../encrypt')
    const {encode,decode} = createEncrypt('1234567890ABCDEFG')

    const str = 'Hello world'
    // 加密
    let result = encode('Hello world')
    // 解密
    result = decode(result)

    expect(result).toBe(str)
})


