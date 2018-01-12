import React from 'react'
import connect from 'next-redux-wrapper'
import {store_Comments,
  dp_comments,
  dp_answer_comments,
  dp_answer_count
  }
 from './store_comments';
import axios from 'axios';
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/comments/container';



class Index extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const comments_url = 'http://localhost:4000/comments';
    const comments_res = await axios({
      method : 'get',
      url    : comments_url
    });
    store.dispatch(dp_comments(comments_res.data.item));


    const answer_comments_url = 'http://localhost:4000/answer_comments';
    const answer_comments_res = await axios({
      method : 'get',
      url    : answer_comments_url
    });
    store.dispatch(dp_answer_comments(answer_comments_res.data.item));


    const answer_count_url = 'http://localhost:4000/count_aswer';
    const count_res = await axios({
      method : 'get',
      url    : answer_count_url
    });
    store.dispatch(dp_answer_count(count_res.data.item));

    return{isServer};
  }
  componentWillReceiveProps(nextProps) {
  }
  render () {
    const props = this.props;
    return (
      <div>
        <Head_></Head_>
        <Header></Header>
        <Container
          comments= { props.Comments }
          answer  = { props.Answer   }
          count   = { props.Comment_Len}
         >
         </Container>
        <Footer></Footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    Comments     : state.Comments,
    Answer       : state.Answer,
    Comment_Len  : state.Comment_Len
  }
}




export default connect(store_Comments,mapStateToProps)(Index)
