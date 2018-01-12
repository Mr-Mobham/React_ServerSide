import React,{Component} from 'react';
import Child_Answer from './child_answer';


class Answer extends Component {
  componentWillMount() {
    this.Answer()
  }
  Answer(){
    let Arry      = [];
    const props   = this.props;
    const answer  = props.answer;
    const contact = props.contact;

    answer.map((text,index)=>{
      let len_Arry  = [];
      if (text.parent_id == contact.id) {
        Arry = [...Arry,text];
        this.answer = Arry.map((contact,index2)=>{
          return(
            <Child_Answer key={index2} contact={contact} ></Child_Answer>
          )
        })
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.Update_Answer(nextProps);
  }
  Update_Answer(nextProps){
    let Arry      = [];
    const props   = nextProps;
    const answer  = props.answer;
    const contact = props.contact;

    answer.map((text,index)=>{
      let len_Arry  = [];
      if (text.parent_id == contact.id) {
        Arry = [...Arry,text];
        this.answer = Arry.map((contact,index2)=>{
          return(
            <Child_Answer key={index2} contact={contact}  ></Child_Answer>
          )
        })
      }
    });
  }

    render() {
        return (
          <div>
            {this.answer}
          </div>
        );
    }
}

export default (Answer)
