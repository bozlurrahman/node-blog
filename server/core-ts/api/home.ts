/*
 * @Author: bs32g1038@163.com 
 * @Date: 2017-02-28 22:05:58 
 * @Last Modified by: bs32g1038@163.com
 * @Last Modified time: 2017-03-31 18:52:03
 */

import * as  _ from 'lodash';
import SettingService from '../service/SettingService';
import LinkService from '../service/LinkService';
import CategoryService from '../service/CategoryService';
import UserService from '../service/UserService';
import IUserEntity from '../models/entity/IUserEntity';
import config from '../config';

export default class HomeApiController {

    static async init(req, res, next) {
        let settingService = new SettingService();
        let userService = new UserService();
        let linkService = new LinkService();
        let categoryService = new CategoryService();
        try {
            let user: IUserEntity = await userService.getByAccount(config.admin_role.account);

            let init = {
                links: await linkService.getAll(),
                user: {
                    email: user.email,
                    github: user.github,
                    img_url: user.img_url,
                    location: user.location,
                    motto: user.motto,
                    nick_name: user.nick_name,
                    qq: user.qq
                },
                setting: await settingService.getById(config.site_setting._id),
                categories: await categoryService.getAll()
            }
            console.log(init)
            res.json(init);
        } catch (error) {

        }
    }
}