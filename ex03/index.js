const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        readStream.on("data",(data)=>{
            reqData.push(data)
            size += data.length
        })
        readStream.on('end',()=>{
            const json = Buffer.concat(reqData,size)
            const  content = JSON.parse(json.toString())
            resolve(content)
        })
    })
}
