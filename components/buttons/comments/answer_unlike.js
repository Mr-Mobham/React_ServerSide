import React,{Component} from 'react';
import connect from 'next-redux-wrapper';
import {
    store_Comments,
    dp_unlike_answer_comment
 }
 from '../../../pages/store_comments';
 import axios from 'axios';


 class Answer_UnLike extends Component {
   componentWillMount() {
     this.setState({delegate:false});
   }
     UnLike(){
     const props   = this.props;
     const content = props.content;

     this.props.Sb_UnLike_Answer(content.unlike,content.id);
     this.setState({delegate:true});
   }
    render() {
      const props   = this.props;
      const content = props.content;

        return (
          <button type="button" className="right like" name="button" >
            <h3 className="Number right">{content.unlike}</h3>
            <img src="http://localhost:4000/icon/img/minus11.svg" onClick={this.UnLike.bind(this)} className="Negative right"  />
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
// checked code daynmic component //

const mapDisPatchToProps = (dispatch,props) =>{
  return{
    Sb_UnLike_Answer:(unlike,id)=>{
      dispatch((dp_unlike_answer_comment(unlike,id)));
        const url     =  `http://localhost:4000/answer_comments/${id}`;
        axios.put(url,{
          method: 'PUT',
          data  : {
            unlike : unlike - 1
          }
        });
    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(Answer_UnLike)
