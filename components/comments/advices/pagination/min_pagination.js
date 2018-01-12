import React,{Component} from 'react';

 class Min_Pagination extends Component {

    render() {
        return (
          <div className="pagnation">
            <div className="wrapper">
              <div className="buttns">
                <button type="button" className="button Next" name="button">بعدی</button>
                <button type="button" className="button number " name="button">2</button>
                <button type="button" className="button number" name="button">1</button>
                <button type="button" className="button Next" name="button">قبلی</button>
              </div>
            </div>
          </div>
        );
    }
}


export default(Min_Pagination)
