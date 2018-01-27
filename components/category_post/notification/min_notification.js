import React,{Component} from 'react';
import Item_Notification from './data/item_noitifacation';

class Notification extends Component {
  componentWillMount() {
    this.Notification();
  }
  Notification(){
    const props   = this.props;
    const content = props.content;

    this._notification = content.map((text,index)=>{
      return(
        <Item_Notification key={text.id} content={text} url={props.url} index={index} Remove={this.remove.bind(this)}></Item_Notification>
      )
    })
  }
  remove(index,url){
    const props  = this.props;
    props.Remove(index);
  }
  componentWillReceiveProps(nextProps) {
    const props   = nextProps
    const content = props.content;

    this._notification = content.map((text,index)=>{
      return(
        <Item_Notification key={text.id} content={text} url={props.url} index={index} Remove={this.remove.bind(this)}></Item_Notification>
      )
    })
  }
    render() {
      const props = this.props;
        return (
          <div className="froum notification">
            <div className="items">
              <div className="wrapper">
                {this._notification}
              </div>
            </div>
          </div>
        );
    }
}


export default (Notification);
