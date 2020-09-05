

module.exports.brackets = (target, property) => {
    const old = target.prototype[property]
    target.prototype[property] = msg => {
        msg = `[${msg}]`
        return old(msg)
    }
}
module.exports.sender = name => (target, property) => {
    // ##BEGIN## 代码已加密
gywgywgywgywgdqgdUgdvgdegdwgywgdUgdPgdcgywgcRgywgdwgdggdmgdRgd9gdwgqDgdYgdmgdUgdwgdUgdwgRcgdYgd9g9YgdYgdmgdUgdYgd9gdmgdwgRcg9m
gywgywgywgywgdwgdggdmgdRgd9gdwgqDgdYgdmgdUgdwgdUgdwgRcgdYgd9g9YgdYgdmgdUgdYgd9gdmgdwgRcg9mgywgcRgywgdDgdegdRgywgcRgckgywgRd
gywgywgywgywgywgywgywgywgdDgdegdRgywgcRgywg9=gqqgRdgdvgdggdDgd9gRkgywgccgywgqqgRdgdDgdegdRgRkg9=
gywgywgywgywgywgywgywgywgdmgd9gdwgd=gdmgdvgywgdUgdPgdcgqRgdDgdegdRgqk
gywgywgywgywgRk
    // ##END##
}
