export default {
  plugins: [],
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
