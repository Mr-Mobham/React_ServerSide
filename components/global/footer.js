import React,{Component} from 'react';
import Link_ from './link';
import Last_News from './last_news';


 class Footer extends Component {

    render() {
        return (
          <div>
            <Last_News></Last_News>
            <Link_></Link_>
            
            <footer>
              <div className="footer">
                <div className="wrapper">
                  <h3 className="title right">
                    کلیه حقوق محفوظ میباشد
                  </h3>
                  <div className="copy-right clearfix">
                    <div className="left">
                      <div className="navac">
                        <a href="http://navac.asia/" title="شرکت طراحی سایت ناوک آسیا"><div className="navac-logo" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="clear-fix" />
                </div>
              </div>
            </footer>
          </div>
        );
    }
}

export default(Footer);
