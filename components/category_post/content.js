import React,{Component} from 'react';
import Notification from './notification/min_notification';
import Min_Tab from './tab/min_tab';
import Subjects from './subjects/min_subject';
import Comments from './comments/min_comments';
import Private_Comment from './private_message/min_private_message';
import { connect } from 'react-redux';


 class Content extends Component {
   componentWillMount() {


   }
   Remove(index){
     const props = this.props;

     props.Remove(index);
   }
    render() {
      const props = this.props;

        return (
          <section className="container margin--top">
            <Notification
              url     = {props.url}
              content = {props.Notification.Arry}
              Remove  = {this.Remove.bind(this)}
             >
             </Notification>
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

function mapStateToProps(state) {
  return{
    Notification: state.Notification
  }
}

const mapDispatchToProps = (dispatch,props) =>{
  const url  = 'http://127.0.0.1:8000/';
  return{
      Remove:(index)=>{
        dispatch({
          type  : 'Remove',
          index : index
      });
    },
  }

};


export default connect(mapStateToProps,mapDispatchToProps)(Content)
