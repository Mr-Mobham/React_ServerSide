import React from 'react'
import { connect } from 'react-redux';
import { initStore,
  addCount
   }
from './test_store';
import axios from 'axios';
// import {addCount} from '../action/test';


class Test extends React.Component {
    componentWillMount() {
      this.props.Len_Comment()
    }
    render() {
        return (
            <div className="class-name">
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
    Len_Comment(sort) {
      dispatch({
        type: 'test',
      });
    }

    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Test);
