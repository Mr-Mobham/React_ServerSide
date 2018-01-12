import React,{Component} from 'react';

 class Attachment extends Component {

    render() {
      // const props   = this.props;
      // const content = props.content;

        return (
          <div className="attachment right">
            <a href="#" className="link">
              <img src="http://localhost:4000/icon/img/attachment-clip.svg" className="icon_attach right"  />
              <h3 className="right title">پیوست اول</h3>
            </a>
          </div>
        );
    }
}

export default(Attachment);
