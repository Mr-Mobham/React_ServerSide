import React,{Component} from 'react';

 class Last_News extends Component {

    render() {
        return (
          <div className="newletter">
              <div className="wrapper">
                <aside className="right news">
                  <img src="http://localhost:4000/icon/img/black-envelope-email-symbol.svg" className="black-envelope-email-symbol right"  />
                  <h3 className="title right">جهت اطلاع از آخرین محصولات شماره همراه خود را در خبرنامه ثبت کنید</h3>
                </aside>
                <aside className="left Number">
                  <input type="text" className="input_Number" placeholder="شماره همراه خود را وارد کنید"  />
                  <input type="submit" className="submit" value="ثبت نام" />
                </aside>
                <div className="clear-fix" />
              </div>
          </div>
        );
    }
}

export default(Last_News);
