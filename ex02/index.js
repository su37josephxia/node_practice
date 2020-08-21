module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            // 递归
            let fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            } else {
                return fn(function next() {
                    dispatch(i + 1)
                })
            }
        }
    }
}
