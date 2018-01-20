import React,{Component} from 'react';
import connect from 'next-redux-wrapper'
import {
    store_Comments,
    dp_update_len
 }
 from '../../../../../pages/store_comments';
import UnLike from '../../../../buttons/comments/unlike';
import Like from '../../../../buttons/comments/like';
import Count_Comment from '../../../../buttons/comments/count_comments';
import Date_Comment from '../../../../buttons/comments/date_comments';
import Answer_Comment from '../../../../buttons/comments/answer_comments';
import Attachment from '../../../../buttons/comments/attachment';
import Editor from '../../../../buttons/comments/editor';



class Child_content extends Component {
    componentWillMount() {
      this.Fn_like();
      this.Fn_unlike();
    }
    Fn_like(){
      let   Arry        = [];
      const props       = this.props;
      const content     = props.contact;
      const index       = props.index;

      this.like_comment = [content].map((text,index)=>{
          return(
            <Like key={index} content = {text} index={index}></Like>
          )
      })
    }
    Fn_unlike(){
      let   Arry        = [];
      const props       = this.props;
      const content     = props.contact;
      const index       = props.index;

      this.unlike_comment = [content].map((text,index)=>{
          return(
            <UnLike key={index} content = {text} index={index}></UnLike>
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
      const index     = nextProps.index;

      this.like_comment = [content].map((text,index)=>{
          return(
            <Like key={index} content = {text} index={index}></Like>
          )
      })
    }
    fn_unlike(nextProps){
      let   Arry      = [];
      const content   = nextProps.contact;
      const index     = nextProps.index;

      this.unlike_comment = [content].map((text,index)=>{
          return(
            <UnLike key={index} content = {text} index={index}></UnLike>
          )
      })
    }
     render() {
       const props       = this.props;
       const content     = props.contact;
       const index       = props.index;


         return (
           <div>
               <div className="post">
                 <div className="right nav-top">
                   <h3 className="title right">{content.title_comment}</h3>
                   <div className="left date_time">
                    {this.unlike_comment}
                    {this.like_comment}
                    <Count_Comment content={content}></Count_Comment>
                    <Date_Comment content={content}></Date_Comment>
                   </div>
                   <div className="clear-fix" />
                 </div>
                 <div className="clear-fix" />
               </div>
               <div className="descriptions">
                 <div className="description">
                   {content.desc}
                 </div>
                 <img src="http://localhost:4000/icon/img/quotations.svg" className="quotation right"  />
                 <div className="attachment right">
                 </div>
                 <div className="right min_attachment">
                    <Editor display={true} content={content} clear_value={content.clear_value}></Editor>
                    <Attachment></Attachment>
                    <Attachment></Attachment>
                    <Answer_Comment content={content}></Answer_Comment>
                   <div className="clear-fix" />
                 </div>
                 <div className="clear-fix" />
               </div>
               <div className="backlight">
                 <img src="http://localhost:4000/icon/img/arrow_forum.png"  />
               </div>
           </div>
         );
     }
 }



  export default (Child_content)
