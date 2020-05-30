module.exports = {
    title: '朱小通',
    description: '欢迎来到我的主页，这是我的地盘，但也希望留下您的脚印~',
    evergreen: true,
    base: '/zxt-blog/',
    themeConfig: {
        smoothScroll: true,
        nav: [
          { text: '主页', link: '/' },
          {
            text: '技术笔记',
            ariaLabel: 'notes',
            items: [
              { text: '前端基础', link: '/notes/front/' },
              { text: 'react', link: '/notes/react/' },
              // { text: 'node', link: '/notes/node/' },
              // { text: 'java', link: '/notes/java/' },
              // { text: 'python', link: '/notes/python/' },
            ]
          },
          { text: '技术分享', link: '/share/'},
          { text: '查看源码', link: 'https://github.com/z308790037/zxt-blog' },
        ],
        sidebar: {
          '/notes/front/': [{
            title: '前端基础',
            children:[['', '介绍'], ...getFrontCatogry()]
          },{
            title: '框架相关',
            children:['frame']
          },{
            title: '其他',
            children:['vue_predraw']
          }],
          '/notes/react/': [{
            title: 'react入门',
            children:[['', 'react介绍'], ...getReactCatogry()]
          }]
        },
    }
}


// 前端基础的目录
function getFrontCatogry () {
  return [
    'js_day1',
    'js_array',
    'js_object',
    'js_day2',
  ]
}

//react入门目录
function getReactCatogry () {
  return [
   
  ]
}