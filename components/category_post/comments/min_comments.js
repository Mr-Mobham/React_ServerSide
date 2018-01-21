import React,{Component} from 'react';
import Comment_Item from './data/item_comment';



 class Comments extends Component {

    render() {
        return (
          <div className="items"> {/* Answer posted */}
            <Comment_Item></Comment_Item>
          </div>
        );
    }
}
export default (Comments);
