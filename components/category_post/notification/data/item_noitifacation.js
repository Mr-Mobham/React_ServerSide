import React,{Component} from 'react';
import axios from 'axios';




 class Item_Notification extends Component {

    Remove(event){
     event.preventDefault();
    const props       = this.props;
    const content     = props.content;
    const id          = content.id;
    const index       = props.index;



    props.Remove(index);
   }

    render() {
      const props   = this.props;
      const content = props.content;

        return (
          <div className={content.color + ` item`}>
            <div className="right Content">
              <svg version="1.1" className="notification-icon right" x="0px" y="0px" width="510px" height="510px" viewBox="0 0 510 510" style={{enableBackground: 'new 0 0 510 510'}} xmlSpace="preserve">
                <path d="M255,510c28.05,0,51-22.95,51-51H204C204,487.05,226.95,510,255,510z M420.75,357V216.75
                  c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25,17.85,275.4,0,255,0c-20.4,0-38.25,17.85-38.25,38.25V56.1
                  c-73.95,17.85-127.5,81.6-127.5,160.65V357l-51,51v25.5h433.5V408L420.75,357z" />
              </svg>
              <h3 className="title right">{content.title}</h3>
              <div className="clear-fix" />
            </div>
            <div className="left icno-close" onClick={this.Remove.bind(this)}>
              <a href="#" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" className="left icon_close_danger danger" version="1.1" viewBox="0 0 21.9 21.9" enableBackground="new 0 0 21.9 21.9" width="512px" height="512px">
                  <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill="#D80027" />
                </svg>
              </a>
            </div>
            <div className="clear-fix" />
            <span className="alert-danger" />
          </div>
        );
    }
}


export default (Item_Notification);
