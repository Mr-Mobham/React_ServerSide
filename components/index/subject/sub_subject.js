import React,{Component} from 'react';

 class Sub_Subject extends Component {

    render() {
      const props    = this.props;
      const contact  = props.contact;
        return (
          <li>
            <a href="#">{contact.sub_categorey_title}
              <span className="line" />
            </a>
          </li>

        );
    }
}

export default(Sub_Subject);
