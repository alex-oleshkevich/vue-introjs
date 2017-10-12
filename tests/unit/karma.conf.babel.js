import findRoot from 'find-root';
import webpackConfig from '../../webpack.config.test.babel';

const PKG_ROOT = findRoot(__dirname);

export default (config) => {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage', 'junit'],
        files: ['./index.js'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: `${PKG_ROOT}/reports/js/coverage`,
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        },
        junitReporter: {
            outputFile: `${PKG_ROOT}/reports/js/unit/results.xml`
        }
    });
};
