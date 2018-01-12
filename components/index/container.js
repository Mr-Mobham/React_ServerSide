import React,{Component} from 'react';
import Nav_Top from '../global/nav_top';
import Notification_Min from './notification/notification_min';
import Subject_Min from './subject/subject_min';
import Last_Subject_Min from './last_subject/last_subject_min';
import Slider_Min from './slider/slider_min';


class Container extends Component {

    render() {
      const props = this.props;
        return (
          <section className="container margin--top">
            <Nav_Top></Nav_Top>
            <Notification_Min notification={props.notification}></Notification_Min>
            <Subject_Min
             title         = {props.subjects_title}
             subjects      = {props.subjects}
             sub           = {props.sub_subjects}
             >
             </Subject_Min>
            <Last_Subject_Min
              last_subjects = {props.last_subjects}
            >
            </Last_Subject_Min>
            <Slider_Min
              last_posts_advice = {props.last_posts_advice}
            >
            </Slider_Min>
          </section>
        );
    }
}

export default (Container);
