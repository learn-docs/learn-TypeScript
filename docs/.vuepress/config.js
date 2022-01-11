module.exports = {
	title: 'learn-TypeScript 文档',
	description: 'learn-TypeScript 文档',
	base: '/learn-TypeScript/',
	theme: 'reco',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
	],
	plugins: [
	  [
		 'dynamic-title',
		 {
			showIcon: '/favicon.ico',
			showText: '(/≧▽≦/)咦！又好了！',
			hideIcon: '/failure.ico',
			hideText: '(●—●)喔哟，崩溃啦！',
			recoverTime: 2000,
		 },
	  ],
	  ['vuepress-plugin-code-copy', true]
   ],
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		lastUpdated: '上次更新',
		subSidebar: 'auto',
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: '星星♥',
				link: 'https://github.com/webVueBlog/learn-TypeScript'
			},
			{
		 	text: '哪吒的博客',
				items: [{
						text: 'Github',
						link: 'https://github.com/webVueBlog'
					},
					{
						text: '博客',
						link: 'https://1024bibi.com'
					}
				]
			}
		],
		sidebar: [{
				title: '欢迎学习',
				path: '/',
				collapsable: false, // 不折叠
				children: [{
					title: "学前必读",
					path: "/"
				}]
			},
			{
				title: "基础学习",
				path: '/handbook/install',
				// collapsable: false, // 不折叠
				children: [{
						title: "TypeScript 安装",
						path: "/handbook/install"
					}
				],
			},
		]
	}
}
