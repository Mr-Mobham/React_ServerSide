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
      this.props.Len_Commdsadsaent("DASDASDTEST")
    }
    render() {
        return (
            <div className="class-name">
                <Component_></Component_>
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
        data : "Mahdi"
      });
    },
      Len_Commdsadsaent:(test)=>{
        dispatch({
        type: 'COMMENTS',
        data : test
      });
    }
  }
}


export default connect(initStore,mapStateToProps,mapDispatchToProps)(Test)
