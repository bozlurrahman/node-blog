import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import siteInfo from '../../config/site-info';
import NavLink from '../nav-link';
import { GithubSvg } from '../svgs/github-svg';
import { HomeSvg } from '../svgs/home-svg';
import { LogoSvg } from '../svgs/logo-svg';
import { RssSvg } from '../svgs/rss-svg';
import { UserSvg } from '../svgs/user-svg';
import { SearchForm } from './search-form';
import media from '../../utils/media';

const Container = styled.header`
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    flex: 0 0 auto;
    ${media.phone`
        font-size: 18px;
        border: none;
        box-shadow: 0px 1px 3px 0px rgba(17,58,93,0.1);
        margin-bottom: 1px;
        .search-form {
            margin: 0 20px 0 0;
            width: 100%;
            input{
                width: 100%;
            }
        }
    `};
`;

const MainWrap = styled.div`
    position: relative;
    bottom: 0;
    text-align: center;
    color: #555;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    > p {
        font-size: '12px';
    }
    ${media.phone`
        width: 100%;
        height: 44px;
        padding: 0;
    `};
`;

const HomeNav: any = styled.a`
    display: flex;
    text-decoration: none;
    color: #555;
    font-size: 16px;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
    @font-face {
        font-family: 'siteitlefont';
        src: url(data:font/truetype;charset=utf-8;base64,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LbBLLLAAFkUjIC4gRoojYTixLgEUKy2wTCywCCNCsEsrLbBNLLIAAEQrLbBOLLIAAUQrLbBPLLIBAEQrLbBQLLIBAUQrLbBRLLIAAEUrLbBSLLIAAUUrLbBTLLIBAEUrLbBULLIBAUUrLbBVLLMAAABBKy2wViyzAAEAQSstsFcsswEAAEErLbBYLLMBAQBBKy2wWSyzAAABQSstsFosswABAUErLbBbLLMBAAFBKy2wXCyzAQEBQSstsF0ssgAAQystsF4ssgABQystsF8ssgEAQystsGAssgEBQystsGEssgAARistsGIssgABRistsGMssgEARistsGQssgEBRistsGUsswAAAEIrLbBmLLMAAQBCKy2wZyyzAQAAQistsGgsswEBAEIrLbBpLLMAAAFCKy2waiyzAAEBQistsGssswEAAUIrLbBsLLMBAQFCKy2wbSyxADorLrEuARQrLbBuLLEAOiuwPistsG8ssQA6K7A/Ky2wcCywABaxADorsEArLbBxLLEBOiuwPistsHIssQE6K7A/Ky2wcyywABaxATorsEArLbB0LLEAOysusS4BFCstsHUssQA7K7A+Ky2wdiyxADsrsD8rLbB3LLEAOyuwQCstsHgssQE7K7A+Ky2weSyxATsrsD8rLbB6LLEBOyuwQCstsHsssQA8Ky6xLgEUKy2wfCyxADwrsD4rLbB9LLEAPCuwPystsH4ssQA8K7BAKy2wfyyxATwrsD4rLbCALLEBPCuwPystsIEssQE8K7BAKy2wgiyxAD0rLrEuARQrLbCDLLEAPSuwPistsIQssQA9K7A/Ky2whSyxAD0rsEArLbCGLLEBPSuwPistsIcssQE9K7A/Ky2wiCyxAT0rsEArLbCJLLMJBAIDRVghGyMhWUIrsAhlsAMkUHixBQEVRVgwWS0AAABLuADIUlixAQGOWbABuQgACABjcLEAB0K0RTEdAwAqsQAHQrc4CCQIEgcDCCqxAAdCt0IGLgYbBQMIKrEACkK8DkAJQATAAAMACSqxAA1CvABAAEAAQAADAAkqsQMARLEkAYhRWLBAiFixA2REsSYBiFFYugiAAAEEQIhjVFixAwBEWVlZWbc6CCYIFAcDDCq4Af+FsASNsQIARLMFZAYAREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQBB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)
            format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    img {
        width: auto;
        height: 28px;
        ${media.phone`
            display: none;
        `};
    }
    ${media.phone`
        margin-left: 10px;
    `};
`;

const HomeTitle = styled.h1`
    font-family: siteitlefont;
    font-size: 16px;
    margin-left: 15px;
    color: #62656d;
    ${media.phone`
        display: block;
        font-size: 14px;
        color: #333;
        text-align: center;
        font-weight: 700;
    `};
`;

const Menu = styled.div`
    overflow: hidden;
    transition: all 0.4s ease;
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-start;
    height: 100%;
    > i {
        font-size: 16px;
        display: none;
    }
    ${media.phone`
        display: none;
    `};
`;

const UL = styled.ul`
    display: flex;
    position: relative;
    margin: 0;
    list-style-type: none;
    text-align: center;
    padding: 0;
    user-select: none;
    &.nav {
        justify-content: center;
        flex: 1 0 auto;
    }
    ${media.phone`
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        text-align: left;
        background-color: #f9f9f9;
        display: none;
        z-index: 1000;
        li{
            display: block;
            width: 100%;
        }
        span{
            display: none;
        }
    `};
`;

const LI = styled.li`
    display: flex;
    align-items: center;
    line-height: 1em;
    margin-left: 20px;
    margin-right: 20px;
    .rss {
        display: block;
        position: relative;
        text-decoration: none;
        font-size: 14px;
        border-radius: 30px;
        letter-spacing: 1px;
        color: #555;
    }
    &.github {
        margin-right: 0;
    }
`;

const ATag = styled.a`
    display: block;
    position: relative;
    text-decoration: none;
    font-size: 16px;
    color: #555;
    cursor: pointer;
    &.active {
        color: #f86422;
        > svg {
            fill: #f86422;
        }
    }
`;

const GithubIcon = styled(GithubSvg)`
    fill: #2b414d;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const LogoIcon = styled(LogoSvg)`
    fill: #2b414d;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

const HomeIcon = styled(HomeSvg)`
    fill: #2b414d;
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-right: 5px;
    vertical-align: bottom;
`;

const UserIcon = HomeIcon.withComponent(UserSvg);

const _RIcon = HomeIcon.withComponent(RssSvg);
const RssIcon = styled(_RIcon)`
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
        transform: rotate(270deg);
    }
`;

const MobileSearchForm = styled(SearchForm)`
    display: none;
    ${media.phone`
        display: flex;
    `};
`;

export const AppHeader = () => {
    return (
        <Container>
            <MainWrap>
                <Link href="/" as="/">
                    <HomeNav title={siteInfo.name}>
                        <LogoIcon></LogoIcon>
                        <HomeTitle title={siteInfo.name}>{siteInfo.name}</HomeTitle>
                    </HomeNav>
                </Link>
                <MobileSearchForm></MobileSearchForm>
                <React.Fragment>
                    <Menu>
                        <UL className="nav">
                            <LI>
                                <NavLink href="/blog">
                                    <ATag>
                                        <HomeIcon></HomeIcon>博客
                                    </ATag>
                                </NavLink>
                            </LI>
                            <LI>
                                <NavLink href="/about">
                                    <ATag>
                                        <UserIcon></UserIcon>关于
                                    </ATag>
                                </NavLink>
                            </LI>
                            <LI>
                                <a className="rss" href="/blog/rss" rel="noopener noreferrer" target="_blank">
                                    <RssIcon></RssIcon>Rss
                                </a>
                            </LI>
                        </UL>
                    </Menu>
                    <UL>
                        <LI>
                            <SearchForm></SearchForm>
                        </LI>
                        <LI className="github">
                            <a
                                className="rss"
                                href="https://github.com/bs32g1038"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <GithubIcon />
                            </a>
                        </LI>
                    </UL>
                </React.Fragment>
            </MainWrap>
        </Container>
    );
};
