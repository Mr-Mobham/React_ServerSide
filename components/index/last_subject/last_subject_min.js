import React,{Component} from 'react';
import Subject_Comment from './subject_comment';


 class Last_Subject_Min extends Component {
   componentWillMount() {
     const props        = this.props;
     const last_subject = props.last_subjects;

     this.comment = last_subject.map((text,index)=>{
       return(
         <Subject_Comment key={index} contact={text}></Subject_Comment>
       )
     })
   }
    render() {
        return (
          <div className="Last--subject last-content">
            <div className="wrapper">
              <div className="subject">
                <div className="titles">
                  <span className="border right" />
                  <h3 className="text right">آخرین مطالب انجمن</h3>
                  <div className="min-subject left">
                    <div className="right all_subject ">
                      کل موضوعات:
                      <span className="number">۱۲۳۴۵۳۲۳</span>
                      <span className="border-left left border--none" />
                    </div>
                    <div className="right all_subject ">
                      کل موضوعات:
                      <span className="number">۱۲۳۴۵۳۲۳</span>
                      <span className="border-left left" />
                    </div>
                  </div>
                  <div className="clear-fix" />
                </div>
              </div>
              {this.comment}
            </div>
          </div>
        );
    }
}

export default(Last_Subject_Min);
