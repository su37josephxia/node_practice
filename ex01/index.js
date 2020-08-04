const { resolve,basename } = require("path");
const fs = require("fs");
module.exports.getRouter = (path = resolve("./")) => {
    const fileList = fs.readdirSync(path)
    let routeStr = ''
    fileList.forEach(file=>{
        let name = basename(file,'.vue')
        let filename = basename(file)
        routeStr+=`
{
    path: '/${name}',
    name: '${name}',
    component: () => import('./views/${filename}')
},`
    })
    const config =`
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [${routeStr}
    ]
})`
    return config
};
