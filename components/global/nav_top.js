import React,{Component} from 'react';

 class Nav_Top extends Component {

    render() {
        return (
          <div className="Login">
              <div className="nav-top">
                <div className="wrapper">
                  <aside className="bg right">
                    <div className="club">
                      <img src="http://localhost:4000/icon/img/user-shape.svg" className="shape right"  />
                      <h3 className="title right">فروم (انجمن)</h3>
                      <div className="clear-fix" />
                    </div>
                  </aside>
                  <aside className="right menu">
                    <ul>
                      <li>
                        <a href="#">پروفایل</a>
                      </li>
                      <li>
                        <span className="message">3</span>
                        <a href="#">پیام ها</a>
                      </li>
                      <li>
                        <a href="#">موضوعات من</a>
                      </li>
                      <li>
                        <a href="#">نظرات من</a>
                      </li>
                      <li>
                        <a href="#"> خروج</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="left user_avatar">
                    <h3 className="user_admin right">کاربر ادمین خوش آمدید</h3>
                    <span className="right min_avatar">
                      <img src="http://localhost:4000/icon/img/user-filled-person-shape.svg" className="avatar"  />
                    </span>
                    <div className="clear-fix" />
                  </div>
                  <div className="clear-fix" />
                </div>
              </div>
            </div>
        );
    }
}


export default(Nav_Top);
