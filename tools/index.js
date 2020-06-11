const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const { createEncrypt } = require('./encrypt')

const { transferFile } = require('./transfer')
const scanFolder = path.resolve(__dirname, '../')

// console.log('process', process.argv)
// 读取配置参数
// if (process.argv.length !== 3) {
//     console.log('缺少运行参数')
//     return
// }

// 从环境变量中读取秘钥
dotenv.config('./env');
const key = process.env['KEY']
console.log('秘钥为:', )
const encrypt = createEncrypt(key)

// 循环加密代码
const list = fs.readdirSync(scanFolder)
list
    .filter(v => v.indexOf('ex') > -1)
    .forEach(async v => {

        const operation = process.argv[2]
        const sourcePath = path.resolve(scanFolder, v + '/index.js')
        console.log(`转换代码 file:`, v, sourcePath)

        await transferFile(encrypt, sourcePath, sourcePath)
    })
