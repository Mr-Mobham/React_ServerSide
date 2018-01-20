import React,{Component} from 'react';


class Data extends Component {
  componentWillMount() {
    const props = this.props;

    props.Event("T");
  }
    render() {
        return (
            <div className="class-name">
                content
            </div>
        );
    }
}


export default (Data);
