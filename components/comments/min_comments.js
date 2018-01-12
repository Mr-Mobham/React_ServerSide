import React,{Component} from 'react';
import Label from './label/label';
import Commponents from './advices/comments/comments';
import Min_Pagination from './advices/pagination/min_pagination';




function Min_Comments(props){
      return (
        <div id="comment">
            <div className="Last--subject last-content">
              <div className="wrapper">
                <Label></Label>
                <Commponents
                  comments = {props.comments}
                  answer   = {props.answer}
                  count     ={props.count}
                >
                </Commponents>
              </div>
            </div>
            <Min_Pagination></Min_Pagination>
            <div className="send_subject"></div>
          </div>
      );
}

export default(Min_Comments);
