import React,{Component} from 'react';

class Last_Posts_Advive extends Component {

    render() {
      const props   = this.props;
      const contact = props.contact;
        return (
          <div className="carousel-cell">
            <div className="user right">
              <div className="avatar">
                <img src="http://localhost:4000/icon/img/user-filled-person-shape.svg" className="avatar_user"  />
              </div>
              <h3 className="title"> {contact.author}</h3>
            </div>
            <div className="last-post-Advisor left">
              <img src="http://localhost:4000/icon/img/quotations.svg" className="quotation right"  />
              <p className="description right">
                {contact.desc}
              </p>
              <div className="clear-fix" />
              <img src="http://localhost:4000/icon/img/arrow.png" className="arrow"  />
            </div>
          </div>
        );
    }
}


export default (Last_Posts_Advive);
