import React,{Component} from 'react';
import Link from 'next/link';


 class Header extends Component {
    render() {
      const url = this.props.url;

        return (
          <header>
            <div className="nav-top">
              <div className="wrapper">
                <div className="right width_logo">
                  <img src={url + `logo.png`} className="logo" alt=""></img>
                  <span className="hover_logo"></span>
                </div>
                <div className="left">
                  <ul>
                    <li>
                      <Link href="/comments">
                        <a>صفحه اصلی
                          <span className="border-bottom"></span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a href="#">پرتال
                        <span className="border-bottom"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/index"> فروم (انجمن)
                        <span className="border-bottom"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">   فروشگاه
                        <span className="border-bottom"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">   باشگاه مشریان
                        <span className="border-bottom"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">     درباره بي نظير
                        <span className="border-bottom"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">      تماس با ما
                        <span className="border-bottom"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clear-fix"></div>
              </div>
            </div>

          </header>
        );
    }
}

export default(Header);
