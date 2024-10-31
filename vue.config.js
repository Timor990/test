const { defineConfig } = require('@vue/cli-service')
const path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = defineConfig({
  transpileDependencies: false,//关掉babel转译，加快编译时间
  configureWebpack:{
    resolve:{
      alias:{
        '@':resolve('src')
      }
    }
  },
  publicPath:process.env.NODE_ENV === 'production' ? '/buya/' : '/'
})