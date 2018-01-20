import React,{Component} from 'react';
import connect from 'next-redux-wrapper'
import {
    store_Comments,
    dp_adding_comments,
    dp_update_len_comments
 }
 from '../../../pages/store_comments';
 import axios from 'axios';


 class Answer_Comment extends Component {
   componentWillMount() {
   }
   async Answer(){
     let counter      = 0;
     const props      = this.props;
     const comment    = props.content;
     const JDate      = await import ('jalali-date');
     const jdate      = new JDate;
     const date       = jdate.format('DD MMMM YYYY');
     const Answer     = props.Answer;
     const name_user  = comment.author;  // check other time auth //
     const length     = Answer.length;
     let last_id_answer = '';

     Answer.map((text,index)=>{
       if (comment.id == text.parent_id) {
          counter++;
       }
     });

     if (length == 0) {
       last_id_answer  = {id : 0};
     }
     else {
       last_id_answer = Answer[length - 1];
     }

     if (comment.answer != '') {
       this.props.Sb_Send_Data(comment.answer,comment.id,name_user,date,last_id_answer);
       this.props.Len_Comment(comment,counter);
     }

   }

    render() {
        return (
        <div className="left min_button ">
          <button type="button" className="left answer coursor" name="button" onClick={this.Answer.bind(this)}>پاسخ</button>
        </div>
        );
    }
}


function mapStateToProps(state) {
  return{
    Answer      : state.Answer,
  }
}

const mapDisPatchToProps = (dispatch,props) =>{
  return{
    Sb_Send_Data:(data,id,author,date,last_id_answer)=>{
      dispatch((dp_adding_comments(data,id,author,date,last_id_answer.id)));
        const url     =  `http://localhost:4000/answer_comments`;
        axios.post(url,{
          method: 'POST',
          data  : {
            id            : last_id_answer.id + 1,
            parent_id     : id,
            description   : data,
            like_comment  : 0,
            author        : author,
            unlike        : 0,
            dynamic_date  : date
          }
        });
    },
    Len_Comment:(data,val)=>{
      dispatch(dp_update_len_comments(data.id,val));
      const url     =  `http://localhost:4000/comments/${data.id}`;
      axios.put(url,{
        method: 'PUT',
        data  : {
          count  : val + 1
        }
      });

    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(Answer_Comment)
