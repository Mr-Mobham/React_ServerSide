import React,{Component} from 'react';



 class Item_Subject extends Component {

    render() {
        return (
          <div className="post-create">
            <div className="right subject">
              <span className="right Square" />
              <h3 className="title right">موضوع اول</h3>
              <div className="clear-fix" />
            </div>
            <div className="left col">
              <img src="http://localhost:4000/icon/img/file.svg" className="file_icon right" alt="" />
              <h3 className="last-post-user right">آخرین پست توسط:</h3>
              <h3 className="user_title right">1395/11/5</h3>
              <div className="clear-fix" />
            </div>
            <div className="clear-fix" />
          </div>
        );
    }
}


export default (Item_Subject);
