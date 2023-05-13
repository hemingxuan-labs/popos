const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        proxy: {
            '/popos': {
                target: 'http://192.168.0.15:10888/',
                changeOrigin: true,
                pathRewrite: { '/popos': 'popos' }
            }
        }
    }
}
