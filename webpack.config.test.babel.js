/**
 * The webpack config.
 *
 * Optimized for tests.
 */
import baseConfig from './webpack.config.babel';

delete baseConfig.entry;
export default baseConfig;
