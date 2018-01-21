import React,{Component} from 'react';
import Item_Notification from './data/item_noitifacation';

class Notification extends Component {

    render() {
        return (
          <div className="froum notification">
            <div className="items">
              <div className="wrapper">
                  <Item_Notification></Item_Notification>
              </div>
            </div>
          </div>
        );
    }
}


export default (Notification);
