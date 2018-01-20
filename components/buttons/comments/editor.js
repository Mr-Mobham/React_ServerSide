import React,{Component} from 'react';
import connect from 'next-redux-wrapper'
import {
    store_Comments,
    dp_textarea
 }
 from '../../../pages/store_comments';
 import axios from 'axios';




 class Editor extends Component {
    componentWillMount() {
      this.setState({
          delegate : false,
          value    : ''
       })
    }
    Change(event){
      const target    = event.target;

      this.setState({
        delegate : true,
        value    : target.value
      });
      const props     = this.props;
      const Comments  = props.Comments;
      const content   = props.content;
      let value       = target.value;

      this.props.Sb_Answer_Data(content.id,value);
    }
    render() {
      const props   = this.props;
      const display = props.display;

      if (props.clear_value) {
        this.state.value = '';
      }

        return (
          <div>
          {
            display ?
            <textarea name="" value={this.state.value} onChange={this.Change.bind(this)}  className="editor--textarea" cols="30" rows="10" placeholder={`پاسخ خود را بنویسید`}>
            </textarea>
             : null
          }
          </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    Comments: state.Comments
  }
}

const mapDisPatchToProps = (dispatch,props) =>{
  return{
    Sb_Answer_Data:(id,data)=>{
        dispatch((dp_textarea(id,data)));
    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(Editor)
