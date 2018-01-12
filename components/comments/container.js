import React,{Component} from 'react';
import Min_Comments from './min_comments';
import Nav_Top from '../global/nav_top';



function Container(props){
  return(
    <section className="container margin--top">
      <Nav_Top></Nav_Top>
      <Min_Comments
        comments =  { props.comments}
        answer   =  { props.answer }
        count    =  { props.count }
      >
      </Min_Comments>
    </section>
  )

}


export default(Container);
