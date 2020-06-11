const fs = require('fs');
const readline = require('readline');
/**
 * 
 */
module.exports.transferFile = async ({ encode, decode }, inputPath, outputPath, beginFlg = '##BEGIN##', endFlg = '##END##', ) => {
    const input = fs.createReadStream(inputPath);

    const rl = readline.createInterface({
        input: input,
        crlfDelay: Infinity
    });
    // 注意：我们使用 crlfDelay 选项将 input.txt 中的所有 CR LF 实例（'\r\n'）识别为单个换行符。
    let isTransfer = false
    const file = []
    let transfer = text => text
    for await (const line of rl) {
        const isEncodeFlg = '代码已加密'
        // 判断是否开始
        if (line.indexOf(beginFlg) > -1) {
            if (line.indexOf(isEncodeFlg) > -1) {
                // 密文文档
                file.push(line.replace(' ' + isEncodeFlg, '') + '\n')
                transfer = decode
            } else {
                // 明文文档
                // 加密处理
                file.push(line + ' ' + isEncodeFlg + '\n')
                transfer = encode
            }
            continue
        }

        // 判断是否结束
        if (line.indexOf(endFlg) > -1) {
            transfer = text => text
        }

        file.push(transfer(line) + '\n')
    }
    fs.writeFileSync(outputPath, file.join(''))
}