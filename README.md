# node_practice

## ![talk](assets/talk.jpeg)

Linux 的创始人 Linus Torvalds 在 2000-08-25 给linux-kernel 邮件列表的一封邮件提到的：

> 能说算不上什么，有本事就把你的代码给我看看。

# 码农翻译 ： 别哔哔 ， 撸一个


## 如何开始做题

```bash
# 首先clone代码 或 fork代码后再开始
# 切换答题分支
git checkout -b answer

# 全局安装jest
npm i jest -g

# 启动测试程序开始做题
# 例如： 做第一题

# 启动单元测试
jest ex01 --watchAll

# 直到完成测试案例
```


## 如何获取答案
- 答案为加密状态保存 需要秘钥
- 首先添加根目录下.env文件
```
KEY=XXXX(秘钥请联系作者)
```
- 执行
```bash
npm run encrypt
```
## 具体题目
### 01 自动生成代码模板
编写一个自动生成路由配置的方法 
要求:
- 不可以使用模板库
- 可以使用fs函数的readdirSync
- 可以使用ES6的模板字符串组装
- 使用模板字符串的迭代方法可以大幅较少代码行数

### 02 洋葱圈中间件实现原理
编写一个compose函数实现洋葱圈功能

### 03 文件流接收转化JSON
为了更好的理解bodyparser原理，编写一个解析JSON文件流的函数
- 提供一个异步函数
- 使用fs异步函数
- 需要Promise封装

### 04 sequelize + sqllite3 实现一个一对多关系
- 本例中使用内存数据库模拟不需要安装数据库
- 根据测试用例内容建立用户和商品数据模型
- 并设置合理的数据关系
- 使数据模型生效

### 05 Eventemitter实现异步流程控制
练习使用订阅发布方式实现异步流程控制 
- 可以使用Eventemitter函数不必自己实现

### 06 jwt原理解析 反篡改 过期检测
- 提取JWT Token中的有效期 
- 参考[阮一峰jwt原理解析](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
- 利用Buffer进行Base64解码
- 验证JWT 中的Hash值(选做)

### 07 loader实现原理 自动加载模块

### 08 企业级实现 统一异常处理

### 09 使用装饰器模式完成对日志方法输出样式的装饰



### 10 Cluster 思维脑图
