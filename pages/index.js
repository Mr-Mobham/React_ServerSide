import React from 'react'
import connect from 'next-redux-wrapper'
import { initStore ,
    dp_notification ,
    dp_title_subject,
    dp_subjects,
    dp_sub_subjects,
    dp_last_subjects,
    dp_last_posts_advice
   }
from './store'
import axios from 'axios';
import Link from 'next/link';
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/index/container';




class Index extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    /// notifications ///
    const url = 'http://localhost:4000/notifications';
    const res = await axios({
      method : 'get',
      url    : url
    });
    store.dispatch(dp_notification(res.data.item));

    /// title_subjects ///
    const title_subject_url = 'http://localhost:4000/title_subjects';
    const title_res_subject = await axios({
      method : 'get',
      url    : title_subject_url
    });
    store.dispatch(dp_title_subject(title_res_subject.data.item));


    /// subjects ///
    const subject_url = 'http://localhost:4000/subjects';
    const res_subject = await axios({
      method : 'get',
      url    : subject_url
    });
    store.dispatch(dp_subjects(res_subject.data.item));


    /// sub_subject ///
    const sub_url = 'http://localhost:4000/sub_subjects';
    const res_sub = await axios({
      method : 'get',
      url    : sub_url
    });
    store.dispatch(dp_sub_subjects(res_sub.data.item));


    /// sub_subject ///
    const last_subject_url = 'http://localhost:4000/comments';
    const res_last_subject = await axios({
      method : 'get',
      url    : last_subject_url
    });
    store.dispatch(dp_last_subjects(res_last_subject.data.item));


    /// post_advice ///
    const last_posts_advice_url = 'http://localhost:4000/posts_advice';
    const res_last_posts_advice = await axios({
      method : 'get',
      url    : last_posts_advice_url
    });
    store.dispatch(dp_last_posts_advice(res_last_posts_advice.data.item));

    return {isServer}
  }

  render () {
    const props = this.props;
    return (
      <div>
        <Head_></Head_>
        <Header></Header>
        <Container
         notification      = {props.Notification}
         subjects_title    = {props.Title_Subjects}
         subjects          = {props.Subjects}
         sub_subjects      = {props.Sub_Subjects}
         last_subjects     = {props.Last_Subjects}
         last_posts_advice = {props.Last_Post_Advice}
         >
         </Container>
        <Footer></Footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    Notification      : state.Notification,
    Subjects          : state.Subjects,
    Sub_Subjects      : state.Sub_Subjects,
    Title_Subjects    : state.Title_Subjects,
    Last_Subjects     : state.Last_Subjects,
    Last_Post_Advice  : state.Last_Post_Advice,
  }
}


export default connect(initStore,mapStateToProps)(Index)
