/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './style.module.scss';
import BackTopBtn from '../back-top-button';
import BlogRuningTime from '../blog-runing-time';
import { ReactSVG } from 'react-svg';
import { EmailIcon, WechatIcon, QQIcon, GithubIcon } from '../../icons';
import icpPng from '@blog/client/assets/images/icp.png';
import { useFetchConfigQuery } from '../../api';

export const AppFooter = () => {
    const { data: config } = useFetchConfigQuery();
    return (
        <footer className={style.appFooter} id="app-footer">
            <BackTopBtn></BackTopBtn>
            <section className={style.content}>
                <div className={style.siteInfo}>
                    <div className={style.svgWrap}>
                        <ReactSVG src={config.siteLogo} />
                        <p className={style.siteTitle}>Welcome to{config.siteTitle} 😀</p>
                    </div>
                    <p className={style.siteTitle}>Here we mainly share front-end and back-end technical articles, and are dedicated to web technology research.</p>
                </div>
                <div className={style.contact}>
                    <div className={style.contactTitle}>Contact us: </div>
                    <div className={style.contactList}>
                        <a href="mailto:bozlurrahman.cmt@gmail.com">
                            <EmailIcon></EmailIcon>
                        </a>
                        <a>
                            <WechatIcon></WechatIcon>
                        </a>
                        <a>
                            <QQIcon></QQIcon>
                        </a>
                        <a href={config.projectGithub}>
                            <GithubIcon></GithubIcon>
                        </a>
                    </div>
                </div>
                <div className={style.statement}>
                    <BlogRuningTime></BlogRuningTime>&nbsp;&nbsp;copyright© 2016-{new Date().getFullYear()}{' '}
                    {config.siteTitle}
                    <a href={config.icpGovCn}>
                        <img src={icpPng.src} alt={icpPng.src} />
                        <span>{config.siteIcp}</span>
                    </a>
                </div>
            </section>
            <section className={style.support}>
                <h3>Business Cooperation</h3>
                <p>Contract front-end and back-end business, before contacting, please clarify your needs, minimum quotation, construction period</p>
                <div className={style.supportList}>
                    <a href="https://nestjs.com">
                        <img src={require('@blog/client/assets/svgs/logo-nestjs.svg')} />
                    </a>
                    <a href="https://react.docschina.org">
                        <img src={require('@blog/client/assets/svgs/logo-react.svg')} />
                    </a>
                    <a href="https://nodejs.org/en">
                        <img src={require('@blog/client/assets/svgs/logo-nodejs.svg')} />
                    </a>
                    <a href="https://ant.design">
                        <img src={require('@blog/client/assets/svgs/logo-ant-design.svg')} />
                    </a>
                </div>
            </section>
        </footer>
    );
};
