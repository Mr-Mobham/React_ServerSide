import React from 'react'
import connect from 'next-redux-wrapper'
import {store_Comments,
  dp_comments,
  dp_answer_comments,
  dp_comments_count
  }
 from './store_comments';
import axios from 'axios';
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/comments/container';
// import Router from 'next/router'
import  {Router}  from '../config/routes';

let countet = 0;

class Index extends React.Component {
  static async getInitialProps ({ store, isServer , query}) {
    const answer_count_url = 'http://localhost:4000/count_comments';
    const count_res = await axios({
      method : 'get',
      url    : answer_count_url
    });
    store.dispatch(dp_comments_count(count_res.data.item));


    const count_item       = 2;
    let id                 = query.id;
    const total_paganation = count_res.data.item;
    if (typeof(id) == 'undefined') {
      id = 1;
    }

    const comments_url = 'http://localhost:4000/comments/' + id + '/' + count_item;
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

    countet++;
    return{isServer,
      data_paganation:{
        count_item  : count_item,
        id          : id,
        total       : total_paganation
      }
    };

  }
  componentWillMount() {

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
          count_item = {[{
              count_item: props.data_paganation.count_item,
              id        : props.data_paganation.id,
              total     : props.data_paganation.total
            }
          ]}
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
