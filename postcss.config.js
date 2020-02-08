module.exports = {
  plugins: {
    autoprefixer: {
      // browsers: ['Android >= 4.4', 'iOS >= 8']
      overrideBrowserslist: ['> 0.15% in CN'] // 自动添加css前缀
    },
    'postcss-pxtorem': {
      rootValue: 75, // 结果为：设计稿元素尺寸/100，比如元素宽750px,最终页面会换算成 7.5rem
      propList: ['*']
    }
  }
}
