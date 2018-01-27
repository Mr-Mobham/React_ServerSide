import React,{Component} from 'react';
import Nav_Top from '../global/nav_top';
import Content from './content';
import { connect } from 'react-redux';



 class Container extends Component {
   componentWillMount() {
     this.props.Len_Commdsadsaent(this.props.notification)
   }
    render() {
      const props = this.props;
      const url   = ' http://127.0.0.1:8000/api/';

        return (
          <section className="container margin--top">
            <Nav_Top url={props.url}></Nav_Top>
             <Content
               url                 = {url}
               notification        = {props.notification}
              >
              </Content>
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
      Len_Commdsadsaent:(data)=>{
        dispatch({
          type : 'TTT',
          data : data
      });
    },
  }

};


export default connect(mapStateToProps,mapDispatchToProps)(Container)
