import React from 'react'
import connect from 'next-redux-wrapper'
import { initStore
}
from './store_category_post';
import axios from 'axios';
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/category_post/container';



class Category_Post extends React.Component {
  static async getInitialProps ({ isServer , query}) {
    const url  = 'http://127.0.0.1:8000/';

    const notification_url = url + 'notification';
    const notification_res = await axios({
      method : 'get',
      url    : notification_url
    });
    return{
      isServer,
      notification:notification_res.data.data
    }
  }
   componentWillMount() {
  }
  render() {
    const props = this.props;
    const url   = ``;
    return (
      <div>
        <Head_ ></Head_>
        <Header
          url={url}
         >
         </Header>
         <Container notification={this.props.notification}></Container>
        <Footer
          url={url}
        >
        </Footer>
      </div>
    );
  }
}


export default connect(initStore)(Category_Post)
