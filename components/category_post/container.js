import React,{Component} from 'react';
import Nav_Top from '../global/nav_top';
import Content from './content';



 class Container extends Component {

    render() {
        return (
          <section className="container margin--top">
            <Nav_Top></Nav_Top>
            <Content></Content>
          </section>
        );
    }
}

export default(Container);
