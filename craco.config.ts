import WebpackBar from "webpackbar"
// const {whenDev} = require('@craco/craco')


// @ts-ignore
module.exports = {
    babel: {
        presets: [[
            '@babel/preset-env'
        ]],
        plugins: []
    },
    webpack: {
        plugins: [
            /** 不会吧,不会还有人不喜欢粉红色? */
            new WebpackBar({color: "pink"})
        ]
    },
    devServer: {
        open: false,
        port: 8082,
        proxy: {}
    }
}
