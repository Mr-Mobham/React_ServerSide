import React,{Component} from 'react';
import connect from 'next-redux-wrapper';
import {
    store_Comments,
    dp_like_answer_comment
 }
 from '../../../pages/store_comments';
 import axios from 'axios';



 class Answer_Like extends Component {
   componentWillMount() {
     this.setState({delegate:false});
   }
     Like(){
     const props   = this.props;
     const content = props.content;

     this.props.Sb_Like_Comment(content.like_comment,content.id);
     this.setState({delegate:true});
   }
    render() {
      const props   = this.props;
      const content = props.content;

        return (
          <button type="button" className="right like" name="button" onClick={this.Like.bind(this)}>
            <h3 className="Number right">{content.like_comment}</h3>
            <svg version="1.1" fill="#358500" className="Negative right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enableBackground="new 0 0 16 16" xmlSpace="preserve">
              <path d="M8.5,1C4.358,1,1,4.358,1,8.5C1,12.643,4.358,16,8.5,16c4.143,0,7.5-3.357,7.5-7.5C16,4.358,12.643,1,8.5,1z M12.5,9H9v3.5
            C9,12.775,8.775,13,8.5,13C8.224,13,8,12.775,8,12.5V9H4.5C4.224,9,4,8.775,4,8.5C4,8.224,4.224,8,4.5,8H8V4.5
            C8,4.224,8.224,4,8.5,4C8.775,4,9,4.224,9,4.5V8h3.5C12.775,8,13,8.224,13,8.5C13,8.775,12.775,9,12.5,9z" />
            </svg>
            <div className="clear-fix" />
          </button>
        );
    }
}

function mapStateToProps(state) {
  return{
    Answer: state.Answer
  }
}

const mapDisPatchToProps = (dispatch,props) =>{
  return{
    Sb_Like_Comment:(like,id)=>{
        dispatch((dp_like_answer_comment(like,id)));
        const url     =  `http://localhost:4000/answer_comments/${id}`;
        axios.put(url,{
          method: 'PUT',
          data  : {
            like : like + 1
          }
        });
    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(Answer_Like)
