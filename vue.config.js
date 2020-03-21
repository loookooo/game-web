const path = require("path");
module.exports = {
    // entry: {
    //     app: '.src/main.js'
    // },
    publicPath: "/",
    outputDir: process.env.NODE_ENV === "development" ? "devdist" : "dist",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    },
    //eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    configureWebpack: (config) =>  {  // 覆盖webpack默认配置的都在这里
        config.resolve = {
            // extensions: ['.js', '.json', '.vue'],  //自动给文件名添加后缀
            alias: {
                'vue': 'vue/dist/vue.js',
                '@': path.resolve(__dirname, './src'),
                'public': path.resolve(__dirname, './public'),
                'components': path.resolve(__dirname, './src/components'),
                'common': path.resolve(__dirname, './src/common'),
                'api': path.resolve(__dirname, './src/api'),
                'views': path.resolve(__dirname, './src/views'),
                'data': path.resolve(__dirname, './src/data'),
            }
        }  
    },
    //
    productionSourceMap: false,
    chainWebpack: config => {
        /* disable insertion of assets as data urls b/c Phaser doesn't support it */
        const rules = [
            { name: 'images', dir: 'img' },
            { name: 'media', dir: 'media' }
        ]
        rules.forEach(rule => {
            const ruleConf = config.module.rule(rule.name)

            ruleConf.uses.clear()

            ruleConf
                .use('file-loader')
                .loader('file-loader')
                .options({
                    name: `${rule.dir}/[name].[hash:8].[ext]`
                })
        })
    },
    pwa: {},
    //webpack-dev-server 相关配置
    devServer: {
        open: false, // 编译完成是否打开网页
        host: '0.0.0.0', //指定使用地址，默认localhost，0.0.0.0代表可以被外界访问
        port: 8080, //访问端口
        https: false, //编译失败时刷新页面
        hot: true, //开启热加载
        hotOnly: false, //
        proxy: {
            '/devApi': {
                target: 'http://localhost:3000', //API服务器地址
                changeOrigin: true,
                pathRewrite: {
                    '^/devApi': ''
                }
            }
        }, //设置代理
        overlay: { //全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        },
        before: app => {

        }
    }
};