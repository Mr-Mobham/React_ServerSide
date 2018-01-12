import React,{Component} from 'react';

 class Label extends Component {

    render() {
        return (
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
            </div>
        );
    }
}


export default (Label);
