import React,{Component} from 'react';
import {
    store_Comments,
    dp_unlike_comment
 }
 from '../../../../../pages/store_comments';
 import Answer_UnLike from '../../../../buttons/comments/answer_unlike';
 import Answer_Like from '../../../../buttons/comments/answer_like';
 import Answer_Date from '../../../../buttons/comments/answer_date';


class Child_Answer extends Component {
  componentWillMount() {
    this.Fn_like();
    this.Fn_unlike();
  }
  Fn_unlike(){
    let   Arry        = [];
    const props       = this.props;
    const content     = props.contact;

    this.unlike_comment = [content].map((text,index)=>{
        return(
          <Answer_UnLike key={index} content = {text}></Answer_UnLike>
        )
    })
  }
  Fn_like(){
    let   Arry      = [];
    const content   = this.props.contact;

    this.like_comment = [content].map((text,index)=>{
        return(
          <Answer_Like key={index} content = {text}></Answer_Like>
        )
    })
  }
  componentWillReceiveProps(nextProps) {
    this.fn_like(nextProps);
    this.fn_unlike(nextProps);
  }
  fn_like(nextProps){
    let   Arry      = [];
    const content   = nextProps.contact;

    this.like_comment = [content].map((text,index)=>{
        return(
          <Answer_Like key={index} content = {text}></Answer_Like>
        )
    })
  }
  fn_unlike(nextProps){
    let   Arry      = [];
    const content   = nextProps.contact;

    this.unlike_comment = [content].map((text,index)=>{
        return(
          <Answer_UnLike key={index} content = {text} ></Answer_UnLike>
        )
    })
  }
    render() {
      const props   = this.props;
      const content = props.contact;

        return (
          <div className="items">
            <div className="item">
              <aside className="right">
                <div className="user right">
                  <a href="#">
                    <div className="avatar ">
                      <svg version="1.1" className="user_default " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="95.926px" height="95.926px" viewBox="0 0 95.926 95.926" style={{enableBackground: 'new 0 0 95.926 95.926'}} xmlSpace="preserve">
                        <path d="M47.893,47.221c11.768,0,21.341-10.592,21.341-23.611S59.66,0,47.893,0C36.125,0,26.55,10.592,26.55,23.61
                    C26.55,36.63,36.125,47.221,47.893,47.221z" />
                        <path d="M72.477,44.123c-1.244-0.269-2.524,0.272-3.192,1.355C61.65,57.847,49.34,58.204,47.962,58.204
                    s-13.687-0.357-21.32-12.722c-0.67-1.085-1.953-1.628-3.198-1.354C6.868,47.777,2.497,72.798,3.789,93.115
                    c0.101,1.58,1.411,2.811,2.994,2.811h82.36c1.583,0,2.894-1.23,2.993-2.811C93.429,72.775,89.057,47.74,72.477,44.123z" />
                      </svg>
                    </div>
                    <div className="info right">
                      <h3 className="title ">نام کاربر مشاور</h3>
                      <h3 className="one" >مشاور اول</h3>
                    </div>
                  </a>
                </div>
              </aside>
              <aside className="left post_item">
                <div className="post">
                  <div className="right nav-top">
                    <h3 className="title right">موضوع اول</h3>
                    <div className="left date_time">
                    {this.unlike_comment}
                    {this.like_comment}
                    <Answer_Date content={content}></Answer_Date>
                    </div>
                    <div className="clear-fix" />
                  </div>
                  <div className="clear-fix" />
                </div>
                <div className="descriptions">
                  <div className="description">
                    {content.description}
                  </div>
                  <img src="http://localhost:4000/icon/img/quotations.svg" className="quotation right"  />
                  <div className="attachment right">
                  </div>
                  <div className="right min_attachment">
                    <div className="attachment right">
                      <a href="#" className="link">
                        <img src="http://localhost:4000/icon/img/attachment-clip.svg" className="icon_attach right"  />
                        <h3 className="right title">پیوست اول</h3>
                      </a>
                    </div>
                    <div className="attachment right">
                      <a href="#" className="link">
                        <img src="http://localhost:4000/icon/img/attachment-clip.svg" className="icon_attach right"  />
                        <h3 className="right title">پیوست اول</h3>
                      </a>
                    </div>
                    <button type="button" className="left answer" name="button">پاسخ</button>
                    <div className="clear-fix" />
                  </div>
                  <div className="clear-fix" />
                </div>
                <div className="backlight">
                  <img src="http://localhost:4000/icon/img/arrow_forum.png"  />
                </div>
              </aside>
              <div className="clear-fix" />
            </div>
          </div>
        );
    }
}



export default (Child_Answer)
