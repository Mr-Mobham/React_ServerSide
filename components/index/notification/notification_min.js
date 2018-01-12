import React,{Component} from 'react';
import Notification_Items from './notification_items';


 class Notification_Min extends Component {
   componentWillMount() {
     this.Notification();
   }
   Notification(){
     const prop = this.props.notification;

     this.notification = prop.map((contact,index)=>{
       const random = Math.random();
       return(
         <Notification_Items key={random} index={index} contact={contact}></Notification_Items>
       )
     })
   }
   componentWillReceiveProps(nextProps) {
     const prop = nextProps.notification;
     this.notification = prop.map((contact,index)=>{
       const random = Math.random();
       return(
         <Notification_Items key={random} index={index} contact={contact}></Notification_Items>
       )
     })
   }
    render() {
        return (
          <div className="froum notification">
            <div className="items">
                <div className="wrapper">
                  {this.notification}
                </div>
              </div>
          </div>
        );
    }
}


export default(Notification_Min);
