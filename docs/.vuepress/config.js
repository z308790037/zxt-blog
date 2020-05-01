module.exports = {
    title: '朱小通',
    description: '欢迎来到我的主页，这是我的地盘，但也希望留下您的脚印~',
    evergreen: true,
    base: '/zxt-blog/',
    themeConfig: {
        displayAllHeaders: true,
        smoothScroll: true,
        nav: [
          { text: '主页', link: '/' },
          {
            text: '技术笔记',
            ariaLabel: 'notes',
            items: [
              { text: '前端笔记', link: '/notes/front/' },
              { text: 'node笔记', link: '/notes/node/' },
              { text: 'java笔记', link: '/notes/java/' },
              { text: 'python笔记', link: '/notes/python/' },
            ]
          },
          { text: '技术分享', link: '/share/'},
          { text: '查看源码', link: 'https://github.com/z308790037/zxt-blog' },
        ],
        sidebar: {
          '/notes/front/': [{
            title: 'js基础',
            children:['', 'js_day1', 'js_day2']
          },{
            title: '框架相关',
            children:['frame']
          },{
            title: '其他',
            children:['vue_predraw']
          }]
        },
    }
}