const smptConfig = {
    isEnableSmtp: false,
    smtpHost: 'smtp.163.com',
    smtpSecure: true,
    smtpPort: 465,
    smtpAuthUser: 'your email address like : bozlurrahman.cmt@gmail.com',
    smtpAuthpass: 'your email password',
};

export type SmptConfigType = typeof smptConfig;

const config = {
    siteTitle: 'Bozlur Rahman\'s personal website',
    siteMetaKeyWords: 'Bozlur Rahman\'s personal website，Bozlur Rahman的博客，web开发，nodejs全栈，前端工程师，后端开发，docker容器，生活日常',
    siteMetaDescription:
        'Bozlur Rahman\'s personal website，专注于web开发，尤其是前端开发。喜欢做技术，也喜欢分享技术。本站主要是分享web相关文章内容，以及个人工作相关日志！',
    siteLogo: '/static/logo.svg',

    siteIcp: '粤ICP备16021965号-3',
    icpGovCn: 'http://www.beian.miit.gov.cn',

    github: 'https://github.com/bs32g1038',
    projectGithub: 'https://github.com/bs32g1038/node-blog',

    siteDomain: process.env.NODE_ENV === 'production' ? 'http://www.lizc.net' : 'http://127.0.0.1:3000',

    ...smptConfig,
};

export type configType = typeof config;

export default config;
