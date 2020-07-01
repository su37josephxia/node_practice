const Sequelize = require('sequelize');
test('练习04 完成一个一对多查询', async () => {

    const sequelize = new Sequelize({
        host: 'localhost',
        dialect: 'sqlite',
        operatorsAliases: true,
        // 关闭执行日志
        logging: false
    });

    // 初始化模型
    const { initModel } = require('../index')
    const { Product, User } = await initModel(sequelize)

    // 设置数据
    user = await User.create({
        name: 'Tom',
    })
    await user.createProduct({
        title: '商品一'
    })
    await user.createProduct({
        title: '商品二'
    })
    const ret = await Product.findAll({
        attributes: ['title']
    })
    expect(JSON.parse(JSON.stringify(ret))).toEqual([{"title": "商品一"}, {"title": "商品二"}])
})