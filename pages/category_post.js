import React from 'react'
import connect from 'next-redux-wrapper'
import { store_category_post,
  addCount
}
from './store_category_post';
import axios from 'axios';
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/category_post/container';
// import {addCount} from '../action/test';



class Category_Post extends React.Component {
  static async getInitialProps ({ store, isServer , query}) {
    // const answer_count_url = 'http://localhost:4000/count_comments';
    // const count_res = await axios({
    //   method : 'get',
    //   url    : answer_count_url
    // });
    // store.dispatch(dp_comments_count(count_res.data.item));



  }
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Head_></Head_>
        <Header></Header>
        <Container

         >
         </Container>
        <Footer></Footer>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    TEST  : state.TEST
  }
}


function mapDispatchToProps(dispatch) {
  return{
    Len_Comment:(test)=>{

    }


  }
}


export default connect(store_category_post,mapStateToProps,mapDispatchToProps)(Category_Post)
