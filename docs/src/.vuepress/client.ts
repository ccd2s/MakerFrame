import { defineArtalkConfig } from '@vuepress/plugin-comment/client'

defineArtalkConfig({
    gravatar: {
        mirror: 'https://weavatar.com/avatar/',
        params: 'sha256=1&d=mp&s=240',
    },
})