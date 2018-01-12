import React,{Component} from 'react';
import Comment_Contact from './contact/comment_contact';
import Answer from './answer/answer';




class Comments extends Component {
  componentWillMount() {
    const props   = this.props;
    const contact = props.comments;
    const count   = props.count;
    this.item =  contact.map((text,index)=>{
      return(
          <Comment_Contact key={index} contact={text} answer={props.answer} count={count} index={index}></Comment_Contact>
      )
    })
  }
  componentWillReceiveProps(nextProps) {
    const props   = nextProps;
    const contact = props.comments;
    const count   = props.count;
    this.item =  contact.map((text,index)=>{
      return(
          <Comment_Contact key={index} contact={text} answer={props.answer} count={count} index={index}></Comment_Contact>
      )
    })
  }

    render() {
        return (
          <div className="items">
            <div className="item">
              {this.item}
            </div>
          </div>
        );
    }
}


export default (Comments);
