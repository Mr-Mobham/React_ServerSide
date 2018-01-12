import React,{Component} from 'react';
import connect from 'next-redux-wrapper';
import {
    store_Comments,
    dp_unlike_comment
 }
 from '../../../pages/store_comments';
 import axios from 'axios';


 class UnLike extends Component {
   componentWillMount() {
     this.setState({delegate:false});
   }
     UnLike(){
     const props   = this.props;
     const content = props.content;
     const index   = props.index;

     this.props.Sb_UnLike_Comment(content.unlike,index,content.id);
     this.setState({delegate:true});
     console.log(index);
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
    Commets: state.Commets
  }
}

const mapDisPatchToProps = (dispatch,props) =>{
  return{
    Sb_UnLike_Comment:(unlike,index,id)=>{
        dispatch((dp_unlike_comment(unlike,index)));
        const url     =  `http://localhost:4000/count_aswer/${id}`;
        axios.put(url,{
          method: 'PUT',
          data  : {
            unlike : unlike - 1
          }
        });
    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(UnLike)
