const crypto = require('crypto')

// base64字符数（不包括`=`）
const MAX_CHAR_COUNT = 64
/**
 * 字符串去重
 * @param {*} str 
 */
const distinct = (str) => str.split('').reduce((pre, c) => pre.indexOf(c) !== -1 ? pre : pre += c, '')
/**
 * 衍生摘要密码，可通过源密码计算
 * @param {*} key 源密码
 * @param {*} minLen 摘要密码长度
 */
const generatorPassKey = (key, minLen) => {
    let midStr = key
    let rest = ''
    while (true) {
        rest = midStr = distinct(rest + crypto.createHash('md5').update(midStr).digest('base64'))
        if (rest.length >= minLen) { // 摘要密码长度不低于minLen
            return rest
        }
    }
}
/**
 * 原版不足：
 * 1. 密码字符不能重复
 * 2. 秘文即密码的散列值，通过加密后的字符收集以及计算可以推出密码
 * 
 * 改进：
 * 1. 源密码（可以重复字符）通过md5提取不重复的可见字符(base64)作摘要密码
 * 2. 加密过程加入源密码生成的盐值，增加推导难度
 */
module.exports.createEncrypt = key => {
    const len = key.length // 源密码长度
    const salt = key.split('').map(x => x.charCodeAt(0)).reduce((pre, c) => pre += c, 0) % len // 根据源密码生成盐值
    key = generatorPassKey(key, len * 2 > MAX_CHAR_COUNT ? MAX_CHAR_COUNT : len * 2) // 生成摘要密码，源密码两倍长度 or 64位
    return {
        encode: str => {
            //加密字符串
            var l = key.length;  //获取密钥的长度
            var a = key.split("");  //把密钥字符串转换为字符数组
            var s = "", b, b1, b2, b3;  //定义临时变量
            for (var i = 0; i < str.length; i++) {  //遍历字符串
                b = salt + str.charCodeAt(i);  //逐个提取每个字符，并获取Unicode编码值
                b1 = b % l;  //求Unicode编码值得余数
                b = (b - b1) / l;  //求最大倍数
                b2 = b % l;  //求最大倍数的于是
                b = (b - b2) / l;  //求最大倍数
                b3 = b % l;  //求最大倍数的余数
                s += a[b3] + a[b2] + a[b1];  //根据余数值映射到密钥中对应下标位置的字符
            }
            return s;  //返回这些映射的字符
        },

        decode: str => {
            var l = key.length;  //获取密钥的长度
            var b, b1, b2, b3, d = 0, s;  //定义临时变量
            s = new Array(Math.floor(str.length / 3));  //计算加密字符串包含的字符数，并定义数组
            b = s.length;  //获取数组的长度
            for (var i = 0; i < b; i++) {  //以数组的长度循环次数，遍历加密字符串
                b1 = key.indexOf(str.charAt(d));  //截取周期内第一个字符串，计算在密钥中的下标值
                d++;
                b2 = key.indexOf(str.charAt(d));  //截取周期内第二个字符串，计算在密钥中的下标值
                d++;
                b3 = key.indexOf(str.charAt(d));  //截取周期内第三个字符串，计算在密钥中的下标值
                d++;
                s[i] = b1 * l * l + b2 * l + b3 - salt //利用下标值，反推被加密字符的Unicode编码值
            }
            b = eval("String.fromCharCode(" + s.join(',') + ")"); // 用fromCharCode()算出字符串
            return b;  //返回被解密的字符串
        }

    }
}