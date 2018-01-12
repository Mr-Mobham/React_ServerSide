import React,{Component} from 'react';
import Sub_Subject from './sub_subject';


 class Subject_Item extends Component {
   componentWillMount() {
     let Arry         = [];
     const props      = this.props;
     const cate_sub   = props.sub;

     cate_sub.map((text,index)=>{
        if (text.parent_id == props.contact.id) {
          Arry = [...Arry,text];
          this.item = Arry.map((contact,index)=>{
            return(
              <Sub_Subject key={index} contact={contact}></Sub_Subject>
            )
          })
        }
     })


   }
    render() {
      const props    = this.props;
      const contact  = props.contact;
      const id       = props.id;

        return (
          <div className="item">
            <aside className="right Subject">
              <span className="box right" />
              <h3 className="title">{contact.title}</h3>
              <div className="group_subject right">
                <ul>
                  {this.item}
                </ul>
              </div>
              <div className="clear-fix" />
            </aside>
            <aside className="left info">
              <div className="col">
                <img src="http://localhost:4000/icon/img/file.svg" className="file_icon right"  />
                <h3 className="last-post-user right">آخرین پست توسط:</h3>
                <h3 className="user_title right">{contact.last_post}</h3>
                <div className="clear-fix" />
              </div>
              <div className="col date-color">
                <img src="http://localhost:4000/icon/img/calendar.svg" className="file_icon right"  />
                <h3 className="last-post-user right">تاریخ آخرین پسـت:</h3>
                <h3 className="user_title right">{contact.last_post_time}</h3>
                <div className="clear-fix" />
              </div>
              <div className="col">
                <img src="http://localhost:4000/icon/img/file.svg" className="file_icon right"  />
                <h3 className="last-post-user right">تعداد کل پسـت ها:</h3>
                <h3 className="user_title right">{contact.count_posts} </h3>
                <div className="clear-fix" />
              </div>
            </aside>
            <div className="clear-fix" />
          </div>
        );
    }
}

export default(Subject_Item);
