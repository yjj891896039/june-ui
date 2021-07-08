//vue.config.js
module.exports={
    lintOnSave:false,
    devServer: {
        host: "localhost", // 设置启动项目网址
        port: 9090, // 设置启动项目端口号
        https: false, // 是否使用https协议
        open: true, // 设置是否自动打开浏览器
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:4000", // 要访问的接口域名
        //         changeOrigin: true, // 开启代理，创建一个虚拟服务器进行发送、接收请求
        //         pathReWrite: {
        //             "^/api": "" // 使用/api代替目标地址，即重写路径，例如地址是/api/aaa可以写成/aaa
        //         }
        //     }
        // }
    }
}