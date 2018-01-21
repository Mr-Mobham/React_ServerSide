import React,{Component} from 'react';
import Notification from './notification/min_notification';
import Min_Tab from './tab/min_tab';
import Subjects from './subjects/min_subject';
import Comments from './comments/min_comments';
import Private_Comment from './private_message/min_private_message';




 class Cotnent extends Component {

    render() {
        return (
          <section className="container margin--top">
            <Notification></Notification>
            <div className="clear-fix" />
            <div className="Last--subject last-content" id="list-post_send">
              <div className="wrapper">
                <div className="subject">
                  <Min_Tab></Min_Tab>
                  <Subjects></Subjects>
                  <Comments></Comments>
                  <Private_Comment></Private_Comment>
                </div>
              </div>
            </div>
          </section>
        );
    }
}


export default(Cotnent);
