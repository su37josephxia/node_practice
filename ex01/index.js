const {resolve} = require('path')
const fs = require('fs')

module.exports.getRouter = (path = resolve('./')) => {
    // ##BEGIN## 代码已加密
    const fileList = fs.readdirSync(path)
    let routeStr = ''
    fileList.forEach(file => {
        const [name, ext] = file.split('.')
        if (ext === 'vue') {
            routeStr += `{
    path: '/${name}',
    name: '${name}',
    component: () => import('./views/${file}')
},\n`
        }
    })

    const str = 
`
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${routeStr}
    ]
})`
return str
    
// ##END##
}

