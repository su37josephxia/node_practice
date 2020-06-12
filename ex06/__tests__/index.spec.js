const { createToken } = require('../index')
const token = createToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWJjIiwicGFzc3dvcmQiOiIxMTExMTEifSwiZXhwIjoxNTkxOTMzODcyLCJpYXQiOjE1OTE5MzAyNzJ9.oKAj1dYjiHaNmKB4l5hUU84yycwZMIMLg47Rt5QxKFQ')
test('练习06 有效性验证', () => {

    expect(new Date(token.getExp() * 1000).toISOString()).toBe('2020-06-12T03:51:12.000Z')
})
test('练习06 JWT有效期和有效性验证', () => {
    expect(token.verify('12345678')).toBe(true)
})