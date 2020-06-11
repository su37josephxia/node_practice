module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            // ##BEGIN## 代码已加密
            let middleware = middlewares[i]
            if (!middleware) return Promise.resolve()
            return Promise.resolve(middleware(function next() {
                return dispatch(i + 1)
            }))
        }
    }
}
