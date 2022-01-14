module.exports = {
	title: 'learn-TypeScript 文档',
	description: 'learn-TypeScript 文档',
	base: '/learn-TypeScript/',
	theme: 'reco',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	plugins: [
		'@vuepress/medium-zoom',
		'@vuepress-reco/vuepress-plugin-loading-page',
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
		// 看板娘
		[
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ["blackCat"],
				clean: true,
				height: 260,
				modelStyle: {
					width: '100px',
					position: "fixed",
					right: "0px",
					bottom: "0px",
					opacity: "0.9",
					zIndex: 99999,
					objectFit: 'cover',
				}
			}
		],
		['@vuepress-reco/vuepress-plugin-bulletin-popover', {
			width: '300px', // 默认 260px
			title: '公告',
			body: [{
					type: 'title',
					content: '欢迎私聊vx:xiaoda0423 🎉🎉🎉',
					style: 'text-aligin: center;'
				},
				{
					text: 'text',
					content: '开始时的兴趣和后来的责任是我不断更新动力。得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。如果你觉得还不错，可以为本人贡献一杯奶茶。'
				}
				// {
				// 	type: 'image',
				// 	src: '../assets/20220112100413.jpg'
				// }
			],
			footer: [{
				type: 'button',
				text: '打赏',
				link: '/donate'
			}]
		}],
		['vuepress-plugin-code-copy', true]
	],
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		// 其它配置
		repo: 'https://github.com/webVueBlog/learn-TypeScript',
		repoLabel: 'Github',
		editLinks: true,
		editLinkText: '编辑此页',
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
					text: '博客',
					items: [{
							text: 'Github',
							link: 'https://github.com/webVueBlog'
						},
						{
							text: '博客',
							link: 'https://1024bibi.com'
						},
					]
				}, ],
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
				path: '/handbook/base',
				collapsable: false, // 不折叠
				children: [{
					title: "TypeScript 基础",
					path: "/handbook/base"
				},{
					title: "TypeScript 进阶",
					path: "/handbook/advance"
				}],
			},
		]
	}
}
