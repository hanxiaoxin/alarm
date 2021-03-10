import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';

const resolve = (relativePath) => {
    return path.resolve(__dirname, relativePath);
}

export default defineConfig({
    root: './src',
    mode: 'development',
    plugins: [reactRefresh()],
    server: {
        port: 8080
    },
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            '~$styles': resolve('./src/assets/styles'),
            '~$images': resolve('./src/assets/images'),
            '$components': resolve('./src/components'),
            '$views': resolve('./src/views'),
            '$hooks': resolve('./src/hooks'),
            '$contexts': resolve('./src/contexts'),
        }
    },
    build: {
        outDir: resolve('./dist')
    }
})
