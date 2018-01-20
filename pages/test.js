import React from 'react'
import connect from 'next-redux-wrapper'
import { initStore,
  addCount
   }
from './test_store';
import axios from 'axios';
// import {addCount} from '../action/test';
import Component_ from './Component_';


class Test extends React.Component {
    componentWillMount() {
      this.props.Len_Comment("Dasds")
      this.props.Len_Commdsadsaent("DASDASDTEST");
      this.setState({
        delegate  : false
      })
    }
    Add(data){
      this.setState({
        delegate  : data
      });
      this.props.Len_Comment("Haasn");
      this.props.Len_Commdsadsaent("M")
    }
    Like(data){
      this.props.Len_Commdsadsaent(data)
      // this.props.Len_Comment("AAA")

    }
    Deep(data){
      this.props.Li(data)
    }
    render() {
        return (
            <div className="class-name">
                <Component_ name_dispath={`TEST`} data={`5`} Event={this.Add.bind(this)} Like={this.Like.bind(this)} deep={this.Deep.bind(this)}></Component_>
            </div>
        );
    }
}
function mapStateToProps(state) {
  return{
    Notification  : state.Notification,
    Test          : state.Test
  }
}


function mapDispatchToProps(dispatch) {
    return{
      Len_Comment:(test)=>{
        dispatch({
        type: 'ANSWER',
        data : test
      });
    },
      Len_Commdsadsaent:(test)=>{
        dispatch({
        type: 'COMMENTS',
        data : test
      });
    },
    Li:(test)=>{
        dispatch({
        type: 'TTT',
        data : test
      });
    }

  }
}


export default connect(initStore,mapStateToProps,mapDispatchToProps)(Test)
