import * as React from 'react';
import axios from '../utils/axios';

class CommentForm extends React.Component {
    render() {
        return (
            <form className="comment-form" ref="form" onSubmit={(e) => this.ok(e)}>
                <div className="form-inline">
                    <div className="form-group">
                        <label className="label">昵称</label>
                        <input id="nickName" name="nickName" placeholder="输入你的昵称" type="text" className="comment-form__input" />
                    </div>
                    <div className="form-group">
                        <label className="label">邮箱</label>
                        <input id="email" name="email" placeholder="输入你的email" type="text" className="comment-form__input" />
                    </div>
                </div>
                <div className="form-group">
                    <textarea id="content" name="content" rows="3" placeholder="留点空白给你说~" className="comment-form__textarea"></textarea>
                </div>
                <div className="footer">
                    <button type="submit" className="submit">提 交</button>
                </div>
            </form>
        )
    }

    flash(el) {
        let count = 1;
        let intervalID = setInterval(function () {
            if (count % 2 == 0) {
                el.style = 'background-color: #ffdab9';
            } else {
                el.style = 'background-color: #fff'
            }
            count++;
            if (count >= 8) {
                clearInterval(intervalID);
            }
        }, 140);
    }

    ok(event) {
        let data = {
            article: this.props.articleId
        };
        const self = this;
        for (const ele of event.currentTarget.elements) {
            if (ele.name) {
                if (ele.name == "email" && !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(ele.value)) {
                    self.flash(ele);
                    return event.preventDefault()
                }
                if (!ele.value) {
                    self.flash(ele);
                    return event.preventDefault()
                }
                data[ele.name] = ele.value;
            }
        }
        if (this.props.replyId) {
            Object.assign(data, {
                reply: this.props.replyId
            })
        }
        axios.post(this.props.url, data).then(() => {
            alert("提交成功")
            self.refs.form.reset();
        })
        return event.preventDefault()
    }
}

export default CommentForm;