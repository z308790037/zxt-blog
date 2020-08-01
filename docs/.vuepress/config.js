module.exports = {
    title: '朱小通',
    description: '欢迎来到我的主页，这是我的地盘，但也希望留下您的脚印~',
    evergreen: true,
    host: '0.0.0.0',
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
          { text: '学习计划', link: '/notes/study/'},
          { text: '技术分享', link: '/share/'},
          { text: '查看源码', link: 'https://github.com/z308790037/zxt-blog' },
        ],
        sidebar: {
          '/notes/front/': [{
            title: '前端基础',
            children:[['', '介绍'], ...getFrontCatogry(2)]
          },{
            title: '大前端全栈',
            children:[...getFullStackCategory(1)]
          },{
            title: '随记',
            children:[]
          }],
          '/notes/react/': [{
            title: 'react入门',
            children:[['', 'react介绍'], ...getReactCatogry()]
          }],
          '/notes/study/': [['', '学习计划']]
        },
    }
}

function calcDays(front, day) {
  return Array(day).fill(0).map((d, ids) => `${front}/day${ids+1}`)
}


// 前端基础的目录
function getFrontCatogry (d) {
  return [
    'base/jsArray',
    'base/jsObject',
    ...calcDays('base', d)
  ]
}

// 大前端全栈目录
function getFullStackCategory(d) {
  return [
    ...calcDays('fullStack', d)
  ]
}

//react入门目录
function getReactCatogry () {
  return [
   
  ]
}