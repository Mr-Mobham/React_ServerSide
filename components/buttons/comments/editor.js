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
        delegate : false
      })
    }
    Text_Editor(event){
      const props   = this.props;
      const target  = event.target;
      const value   = target.value;

      if (value != '') {
        this.props.Sb_Answer_Data(value);
      }

    }
    render() {
      const props   = this.props;
      const display = props.display;
        return (
          <div>
          {
            display ?
            <textarea name="" id="" className="editor--textarea" cols="30" rows="10" onKeyUp={this.Text_Editor.bind(this)} placeholder={`پاسخ خود را بنویسید`} />
             : null
          }
          </div>
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
    Sb_Answer_Data:(data)=>{
        dispatch((dp_textarea(data)));
    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(Editor)
