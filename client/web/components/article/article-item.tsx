import Link from '../link';
import React from 'react';
import { parseTime } from '@blog/client/libs/time';
import Comment from './comment';
import { Breadcrumb } from 'antd';
import dynamic from 'next/dynamic';
const ArticleAddress = dynamic(() => import('./article-address'), { ssr: false });
import style from './article-item.style.module.scss';
const MarkdownBody = dynamic(() => import('../markdown-body'), { ssr: false });

interface Props {
    article: any;
    comments: any[];
}

export default function ArticleItem(props: Props) {
    const { article, comments } = props;
    return (
        <div className={style.article}>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>front page</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link href={'/blog/articles?cid=' + (article.category && article.category._id)} passHref={true}>
                        <a>{article.category && article.category.name}</a>
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <span>{article.title}</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={style.articleMeta}>
                <Link href={`/blog/articles/${article._id}`} passHref={true}>
                    <a>
                        <h2 className={style.articleTitle}>{article.title}</h2>
                    </a>
                </Link>
                <div className={style.articleMetaInfo}>
                    <span>Published on {parseTime(article.createdAt)}</span>
                    <span>
                        classified in
                        <Link href={`/blog/articles?cid=${article.category && article.category._id}`} passHref={true}>
                            <a>{article.category && article.category.name}</a>
                        </Link>
                    </span>
                    <span>{article.commentCount}comments</span>
                    <span>number of times read{article.viewsCount}</span>
                </div>
            </div>
            <div className={style.articleContent}>
                <MarkdownBody content={article.content} />
            </div>
            <div className={style.statement}>
                <div>
                    <strong>Link to this article ：</strong>
                    <ArticleAddress articleId={article._id}></ArticleAddress>
                </div>
                <div>
                    <strong>Copyright Notice：</strong>
                    <span>
                        Free reprint - attribution - non-commercial use
                    </span>
                </div>
            </div>
            <div className={style.footer}>
                {article.prev && (
                    <div>
                        <strong>Previous：</strong>
                        <Link href={`/blog/articles/${article.prev._id}`} passHref={true}>
                            <a>{article.prev.title}</a>
                        </Link>
                    </div>
                )}
                {article.next && (
                    <div>
                        <strong>Next：</strong>
                        <Link href={`/blog/articles/${article.next._id}`} passHref={true}>
                            <a>{article.next.title}</a>
                        </Link>
                    </div>
                )}
            </div>
            <Comment article={article} comments={comments}></Comment>
        </div>
    );
}
