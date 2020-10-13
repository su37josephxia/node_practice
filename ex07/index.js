const fs = require('fs')
module.exports.createLoader = config => {
    const loader = (scanFolder, cb) => {
        const files = fs.readdirSync(scanFolder);
        files.forEach(filename => {
            filename = filename.replace(".js", "");
            const file = require(scanFolder + "/" + filename);
            cb(filename, file);
        })
    }

    return {
        initFunction: scanFolder => {
            const ret = {}
            // ##BEGIN## 代码已加密
gywgywgywgywgywgywgywgywgywgywgywgywgdPgdUgdggdcgd9gdmgqRgdegdqgdggdvgcYgdUgdPgdcgd9gdmgqlgywgqRgddgdngdPgd9gdvgdggdDgd9gqlgywgdqgdmgd9gdggdwgd9gcYgd=gdvgqkgywgcRgckgywgRd
gywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgdqgdUgdvgdegdwgywgddgd=gdvgdqgywgcRgywgdqgdmgd9gdggdwgd9gcYgd=gdvgqRgdqgdUgdvgddgdngdRgqk
gywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgywgdmgd9gdwg9YgddgdngdPgd9gdvgdggdDgd9g9mgywgcRgywgddgd=gdvgdq
gywgywgywgywgywgywgywgywgywgywgywgywgRkgqk
            // ##END##
            return ret
        }
    }
}

