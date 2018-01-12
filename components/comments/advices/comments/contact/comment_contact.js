import React,{Component} from 'react';
import Answer from '../answer/answer';
import Child_Contact from './child_contact';


 class Comment_Contact extends Component {
   componentWillMount() {

   }
    render() {
      const props   = this.props;
      const contact = props.contact;

        return (
          <div>
            <aside className="right">
              <div className="user right">
                <a href="#">
                  <div className="avatar ">
                    <svg version="1.1" className="user_default " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="95.926px" height="95.926px" viewBox="0 0 95.926 95.926" style={{enableBackground: 'new 0 0 95.926 95.926'}} xmlSpace="preserve">
                      <path d="M47.893,47.221c11.768,0,21.341-10.592,21.341-23.611S59.66,0,47.893,0C36.125,0,26.55,10.592,26.55,23.61
                      C26.55,36.63,36.125,47.221,47.893,47.221z" />
                      <path d="M72.477,44.123c-1.244-0.269-2.524,0.272-3.192,1.355C61.65,57.847,49.34,58.204,47.962,58.204
                      s-13.687-0.357-21.32-12.722c-0.67-1.085-1.953-1.628-3.198-1.354C6.868,47.777,2.497,72.798,3.789,93.115
                      c0.101,1.58,1.411,2.811,2.994,2.811h82.36c1.583,0,2.894-1.23,2.993-2.811C93.429,72.775,89.057,47.74,72.477,44.123z" />
                    </svg>
                  </div>
                  <div className="info right">
                    <h3 className="title ">نام کاربر مشاور</h3>
                    <h3 className="one">{contact.author}</h3>
                  </div>
                </a>
              </div>
            </aside>
            <aside className="left post_item">
              <Child_Contact contact={contact} count={props.count} index={props.index}></Child_Contact>
              <Answer answer={props.answer} contact={contact} ></Answer>
            </aside>
            <div className="clear-fix" />
          </div>
        );
    }
}


export default (Comment_Contact)
