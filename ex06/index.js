const crypto = require('crypto')
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }

    return {
        getExp: () => {
            // ##BEGIN## 代码已加密
JEHJEHJEHJEHJEHJEHJEHJEHJEHJEHJEHJEHOSJOEEOESOEIOEAJEHOEPOOIOPPOEJOEEOOIOSOJEHJXIJEHJASOJSJAIJAXJHOOEPOOIOEXOEIOSSJPPOESOSSOPSJEHJIEOPJOSEOSEOSSOEXJHOOSEOEXOEEOEOJPPOOIOEXOPPOOOJHPOOEJPAJEHJPEOOAOOIOEIOSSJXJJHIJPEJPHJPH
JEHJEHJEHJEHJEHJEHJEHJEHJEHJEHJEHJEHOEXOSSOEAOPJOEXOESJEHOEPOOIOPPOEJOEEOOIOSOJHOOSSOPEOEP
            // ##END##
        },

        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
            
        }
    }
}
