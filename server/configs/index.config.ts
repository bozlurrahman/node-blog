export const environment = process.env.NODE_ENV;
export const isDevMode = Object.is(environment, 'development');
export const isProdMode = Object.is(environment, 'production');
export const isTestMode = Object.is(environment, 'test');

export const APP_SERVER = {
    hostname: 'localhost',
    port: '8080',
    environment,
};

export const MONGODB = {
    uri: isDevMode
        ? 'mongodb://localhost:27017/dev'
        : isTestMode
        ? 'mongodb://localhost:27017/test'
        : process.env.MONGODB_URL ||
          `mongodb://${process.env.MONGODB_HOSTNAME || 'localhost'}:${process.env.MONGODB_PORT || '27017'}/blog`,
    username: process.env.MONGODB_USERNAME || '',
    password: process.env.MONGODB_PASSWORD || '',
};

export const TOKEN_SECRET_KEY = 'NODEBLOG/bozlurrahman.cmt@gmail.com/TOKEN';

export const GITHUB_SECRET_KEY = 'Github/bozlurrahman.cmt@gmail.com/TOKEN';

export const ADMIN_USER_INFO = {
    nickName: 'Bozlur Rahman',
    email: 'bozlurrahman.cmt@gmail.com',
    location: 'Dhaka',
};

export const RSS = {
    title: 'Bozlur Rahman\'s personal website',
    link: 'http://www.lizc.net',
    language: 'zh-cn',
    description: 'Blog station, focusing on web development, especially front-end development. I like to develop with fellow people!',
    maxRssItems: 50,
};

/**
 * Interval time 1 hour (60 * 60 * 1000ms)
 * Up to 30 entries per ip
 */
export const API_COMMENT_POST_RATE_LIMIT = {
    windowMs: 60 * 60 * 1000,
    max: 30,
};


/**
 * Interval time 1 hour (60 * 60 * 1000ms)
 * Up to 5000 entries per ip
 */
export const API_REQUEST_RATE_LIMIT = {
    windowMs: 60 * 60 * 1000,
    max: 5000,
};
