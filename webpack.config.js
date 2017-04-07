function buildConfig(env) {
    let config;

    if (env == 'prod') {
        console.info('Production configuration is running...');
        config = require('./config/webpack.' + env + '.js')(env);
    } else if (env === 'dev') {
        console.info('Development configuration is running...');
        config = require('./config/webpack.' + env + '.js')(env);
    } else {
        console.warn('Unknown configuration is running...');
        config = require('./config/webpack.prod.js')(env);
    }

    return config;
}

module.exports = buildConfig;