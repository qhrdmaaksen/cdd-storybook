// ES Module aka ESM
import esbuild from 'rollup-plugin-esbuild';
import pkg from './package.json' assert {type: 'json'};


// CommonJS aka CJS

export default {
    input: 'src/index.js',
    output: [{
        file: pkg.exports['.'].import,
        format: 'esm'
    }, {
        file: pkg.exports['.'].require,
        format: 'cjs'
    }],
    plugins: [
        esbuild({
            // All options are optional
            include: /\.jsx?$/, // default, inferred from `loaders` option
            minify: process.env.NODE_ENV === 'production',
            jsx: 'automatic', // default, or 'preserve'
        }),
    ],
    external: [
        "react",
        "react-dom",
        "styled-components"]
};