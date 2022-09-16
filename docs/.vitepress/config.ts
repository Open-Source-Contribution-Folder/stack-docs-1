import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Stack',
    description: 'Card-style Hugo theme designed for bloggers',
    lastUpdated: true,

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],

    markdown: {
        lineNumbers: true,
        theme: 'one-dark-pro'
    },

    cleanUrls: 'with-subfolders',

    themeConfig: {
        logo: '/logo.png',

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2020 - Present Jimmy Cai",
        },

        sidebar: {
            '/guide/': sidebarGuide(),
            '/config/': sidebarGuide(),
            '/writing/': sidebarGuide(),
        },

        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Config', link: '/config/' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/CaiJimmy/hugo-theme-stack' }
        ],

        editLink: {
            pattern: 'https://github.com/CaiJimmy/stack-docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
    },
});

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'About Stack', link: '/guide/' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Deploying', link: '/guide/deploying' }
            ]
        },
        {
            text: 'Config',
            collapsible: true,
            items: [
                {
                    text: 'Introduction',
                    link: '/config/'
                },

            ]
        },
        {
            text: 'Writing',
            collapsible: true,
            items: [
                { text: 'Markdown', link: '/writing/markdown' },
                {
                    text: 'Frontmatter Configs', link: '/writing/frontmatter'
                }
            ]
        },
    ]
}