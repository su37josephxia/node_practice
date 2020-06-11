const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
         // ##BEGIN## 代码已加密
        readStream.on('data', chunk => {
            reqData.push(chunk.toString())
        })
        readStream.on('end', () => {
            resolve(JSON.parse(reqData.join('')))
        })
         // ##END##
    })
}
