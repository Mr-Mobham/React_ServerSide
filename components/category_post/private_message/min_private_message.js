import React,{Component} from 'react';
import Item_Message from './data/item_message';


 class Private_Comment extends Component {

    render() {
        return (
          <div className="items">  {/* Private Msg */}
            <Item_Message></Item_Message>
          </div>
        );
    }
}



export default (Private_Comment);
