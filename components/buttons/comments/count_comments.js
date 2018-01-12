import React,{Component} from 'react';
import axios from 'axios';


 class Count_Comment extends Component {

    render() {
      const props    = this.props;
      const content  = props.content;
      
        return (
          <button type="button" className="right like" name="button">
            <img src="http://localhost:4000/icon/img/black-bubble-speech.svg" className="Square right"  />
            <h3 className="Number right">{content.count}</h3>
            <div className="clear-fix" />
          </button>
        );
    }
}

export default(Count_Comment);
