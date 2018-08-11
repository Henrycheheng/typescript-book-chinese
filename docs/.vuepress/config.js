module.exports = {
  base: '/typescript-book-chinese/',
  title: '深入理解 TypeScript',
  description: 'TypeScript Deep Dive 中文版',
  ga: 'UA-106861408-1',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' } ]
  ],
  themeConfig: {
    repo: 'jkchao/typescript-book-chinese',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '错误更改',
    activeHeaderLinks: false,
    sidebarDepth: 2,
    lastUpdated: '最近更新时间',
    nav: [
      { text: 'blog', link: 'https://jkchao.cn' }
    ],
    sidebar: [
      {
        title: '写在前面',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'TypeScript 项目',
        collapsable: false,
        children: [
          '/project/compilation-context',
          '/project/declarationspaces',
          '/project/modules',
          '/project/namespaces',
          '/project/dynamic-import-expressions'
        ]
      },
      {
        title: 'TypeScript 类型系统',
        collapsable: false,
        children: [
          '/typings/overview',
          '/typings/migrating',
          '/typings/types',
          '/typings/ambient',
        ]
      },
      {
        title: 'TypeScript 错误',
        collapsable: false
      },
      {
        title: '一些提示',
        collapsable: false
      },
      {
        title: 'TypeScript 编译原理',
        collapsable: false
      }
    ]
  }
}