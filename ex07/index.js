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
            // ##BEGIN##
            loader(scanFolder, (filename, createFun) => {
                const func = createFun(config)
                ret[filename] = func
            })
            // ##END##
            return ret
        }
    }
}

