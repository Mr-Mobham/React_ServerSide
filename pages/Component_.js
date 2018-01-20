import React from 'react'
import { connect } from 'react-redux';
import { initStore,
  addCount
   }
from './test_store';
import axios from 'axios';
// import {addCount} from '../action/test';
import Data from './data';


class Test extends React.Component {
    componentWillMount() {
      const props = this.props;

      props.Event(33);

    }
    Like(data){

      this.props.Like("hasan");
      this.props.deep('MMMMMMMMMMMMMMMMMMM')
    }

    render() {
        const props = this.props;

        return (
            <div className="class-name">
                <Data Event={this.Like.bind(this)}></Data>
            </div>
        );
    }
}


  export default (Test);
