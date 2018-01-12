import React,{Component} from 'react';
import Subject_Item from './subject_item';



class Title_Subject extends Component {
  componentWillMount() {
    const props    = this.props;
    this.subjects  = props.subjects.map((text,index)=>{
      if (text.parent_id == props.contact.id) {
        return(
          <Subject_Item key={index} contact={text} sub={props.sub}></Subject_Item>
        )
      }

    })
  }
    render() {
      const props    = this.props;
      const contact  = props.contact;
        return (
          <div className="title_subject">
            <div className="titles">
              <span className="border right" />
              <h3 className="text right">{contact.title}</h3>
              <div className="min-subject left">
                <h3 className=" all_subject">
                  کل موضوعات:
                  <span className="number">4</span>
                </h3>
              </div>
              <div className="clear-fix" />
            </div>
            <div className="items">
            {this.subjects}
            </div>
          </div>
        );
    }
}

export default (Title_Subject);
