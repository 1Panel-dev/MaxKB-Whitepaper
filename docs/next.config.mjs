import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra({
  reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: true
  },webpack(config) {
    // 关闭 webpack 缓存，避免 VFileMessage 序列化错误
    config.cache = false
    return config
  },
})
