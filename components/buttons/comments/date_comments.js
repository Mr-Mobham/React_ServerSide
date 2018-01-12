import React,{Component} from 'react';

 class Date_Comment extends Component {

    render() {
      const props    = this.props;
      const content  = props.content;

        return (
          <button type="button" name="button" className="left dates">
            <img src="http://localhost:4000/icon/img/calendar-page-empty.svg" className="icon_calender right"  />
            <h3 className="Number right">{content.date}</h3>
            <div className="clear-fix" />
          </button>
        );
    }
}

export default(Date_Comment);
