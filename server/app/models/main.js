"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: bs32g1038@163.com
 * @Date: 2017-01-29 23:11:43
 * @Last Modified by: bs32g1038@163.com
 * @Last Modified time: 2017-04-26 19:58:35
 */
require("../helpers/mongoose");
const mongoose = require("mongoose");
const ArticleSchema_1 = require("./Schema/ArticleSchema");
const CategorySchema_1 = require("./Schema/CategorySchema");
const CommentSchema_1 = require("./Schema/CommentSchema");
const GuestbookSchema_1 = require("./Schema/GuestbookSchema");
const UserSchema_1 = require("./Schema/UserSchema");
const LinkSchema_1 = require("./Schema/LinkSchema");
const SettingSchema_1 = require("./Schema/SettingSchema");
const AboutSchema_1 = require("./Schema/AboutSchema");
const MediaSchema_1 = require("./Schema/MediaSchema");
/**
 * 文章内容模型
 */
exports.articleModel = mongoose.model('article', ArticleSchema_1.default, 'article');
/**
 * 文章分类模型
 */
exports.categoryModel = mongoose.model('category', CategorySchema_1.default, 'category');
/**
 * 文章评论模型
 */
exports.commentModel = mongoose.model('comment', CommentSchema_1.default, 'comment');
/**
 * 博客留言模型
 */
exports.guestbookModel = mongoose.model('guestbook', GuestbookSchema_1.default, 'guestbook');
/**
 * 博主基础信息模型
 */
exports.userModel = mongoose.model('user', UserSchema_1.default, 'user');
/**
   * 友情链接内容模型
   */
exports.linkModel = mongoose.model('link', LinkSchema_1.default, 'link');
/**
 * 关于页面模型
 */
exports.aboutModel = mongoose.model('about', AboutSchema_1.default, 'about');
/**
 * 媒体内容模型
 */
exports.mediaModel = mongoose.model('media', MediaSchema_1.default, 'media');
/**
 * 网站配置模型
 */
exports.settingModel = mongoose.model('setting', SettingSchema_1.default, 'setting');
