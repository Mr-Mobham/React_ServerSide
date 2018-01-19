import React,{Component} from 'react';
import connect from 'next-redux-wrapper'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {
    store_Comments,
    dp_comments
 }
 from '../../../../pages/store_comments';
 import Link from 'next/link';
 import  {Router}  from '../../../../config/routes';
 // import Router from 'next/router'


 class Min_Pagination extends Component {
   componentWillMount() {
     const props        =  this.props;
     const paganation   = props.data_paganation[0];
     const calc         = Math.ceil(paganation.total[0].id/paganation.count_item);
     this.setState({
       data: [],
       offset: 0,
       pageCount: calc
     });
   }

   async handlePageClick(data){
     const count_item   = 2;
     const select       = data.selected;
     const id           = select + 1;

     const comments_url = 'http://localhost:4000/comments/' + id + '/' + count_item;
     const comments_res = await axios({
       method : 'get',
       url    : comments_url
     });
     this.props.Update_Pganation(comments_res);
     Router.push({
      pathname: '/comments',
      query: { id: id }
    });

    
   }
   componentWillReceiveProps(nextProps) {
     console.log(nextProps);
   }

    render() {
        return (
          <div className="commentBox">

            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<a href="">...</a>}
                           breakClassName={"break-me"}
                           pageCount={this.state.pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={this.handlePageClick.bind(this)}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"} />
          </div>
        );
    }
}


function mapStateToProps(state) {
  return{
    Comments: state.Comments
  }
}

const mapDisPatchToProps = (dispatch,props) =>{
  return{
    Update_Pganation:(comments_res)=>{
      dispatch((dp_comments(comments_res.data.item)));
        // const url     =  `http://localhost:4000/answer_comments`;
        // axios.post(url,{
        //   method: 'POST',
        //   data  : {
        //     id            : last_id_answer.id + 1,
        //     parent_id     : id,
        //     description   : data,
        //     like_comment  : 0,
        //     author        : author,
        //     unlike        : 0,
        //     dynamic_date  : date
        //   }
        // });
    }
  }

};


export default connect(store_Comments,mapStateToProps, mapDisPatchToProps)(Min_Pagination)
