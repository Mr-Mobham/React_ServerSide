import React,{Component} from 'react';
import Tab_Li from './data/tab_li';


 class Min_Tab extends Component {

    render() {
        return (
          <div className="titles">
            <div className="right list-post_send">
              <ul>
                <Tab_Li></Tab_Li>
                <Tab_Li></Tab_Li>
                <Tab_Li></Tab_Li>
              </ul>
            </div>
            <div className="clear-fix" />
          </div>
        );
    }
}

export default(Min_Tab);
