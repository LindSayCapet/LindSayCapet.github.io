module.exports = {
    // 网站标题
    title: '欢迎来到前端博客',
    // 网站描述
    description: 'Interview with vitePress',
    // 打包目录
    dest: './dist',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // 使用插件
    plugins: [
        '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
        '@vuepress/back-to-top',          // 返回顶部插件
        '@vuepress/medium-zoom',          // 图片预览插件
        '@vuepress/nprogress',        //页面顶部进度条
    ],
    // 主题配置
    themeConfig: {
        logo:  '/logo.png',    
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动logo.jpg
        smoothScroll: true,
        // 导航栏配置
        nav: [
            {
                text: "前端",             //导航标签的名字
                items: [                  //这种格式是有下拉菜单的版本
                    { text: "基础", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                    { text: "Vue", link: "/articles/vue/index" },
                    { text: "React", link: "/articles/react/index" },
                    { text: "小程序", link: "/articles/mini/index" },
                    { text: "Electron", link: "/articles/electron/index" },
                    { text: "Web3D", link: "/articles/web3d/index" },
                    { text: "其他", link: "/articles/other/vitepress/index" },
                ],
            },
            { text: "算法", link: "/leetcode/index" },   //这种是没有下拉菜单的版本
            { text: "项目", link: "/intent/index" },
            { text: "个人简历", link: "/curriculumVitae/index" },

        ],
        socialLinks: [{ icon: "github", link: "https://github.com/LindSayCapet" }], 
        // 侧边栏
        sidebar: {
            '/': getSidebar()
        }
    }
}
function getSidebar() {
    return [
        {
            text: 'HTML',
            items: [
                { text: '小程序', link: '/articles/mini/index' },
            ],
        },

    ]


}