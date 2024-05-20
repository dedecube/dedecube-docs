import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    vitepressBackToTop({
      threshold:300
    })
  },
}