import { Component } from 'react';
import ReactDOM from 'react-dom';

class NullApp extends Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    // this 为当前的实例
    const dom = ReactDOM.findDOMNode(this);
    console.log('componentDidMount 函数处理');
    console.log(dom);
  }

  render() {
    return <div>test</div>;
  }
}

export default NullApp;
