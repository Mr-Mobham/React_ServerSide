import React,{Component} from 'react';
import Title_Subject from './title_subject';


 class Subject_Min extends Component {
   componentWillMount() {
     const props    = this.props;
     this.title  = props.title.map((text,index)=>{
       return(
         <Title_Subject key={index} contact={text} subjects={props.subjects} sub={props.sub} id={text.id}></Title_Subject>
       )
     })
   }
    render() {

        return (
          <div className="subjects index">
            <div className="wrapper">
              <div className="subject">
                {this.title}
              </div>
            </div>
          </div>
        );
    }
}

export default(Subject_Min);
