'use strict';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    modify: (config, { target, dev }, webpack) => {
        const appConfig = config;
        appConfig.resolve.extensions = [...appConfig.resolve.extensions, '.ts', '.tsx'];
        appConfig.module.rules.push({
            test: /\.(ts|tsx)?$/,
            loader: 'ts-loader',
            options: {
                // disable type checker - we will use it in fork plugin
                transpileOnly: true
            }
        });
        appConfig.plugins.push(new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, './tsconfig.json'),
            tslint: isDev ? path.resolve(__dirname, './tslint.json') : '',
            async: isDev,
            useTypescriptIncrementalApi: true,
            checkSyntacticErrors: true,
            reportFiles: [
                '**',
                '!**/__tests__/**',
                '!**/?(*.)(spec|test).*',
                '!**/src/setupProxy.*',
                '!**/src/setupTests.*',
            ],
            watch: [path.resolve(__dirname, './src')],
            silent: true
        }))
        return appConfig;
    },
};
