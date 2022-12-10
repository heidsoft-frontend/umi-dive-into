import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React, { Component } from 'react';

class Counter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 0,
    };
  }

  //组建点击
  handleClick(e: any) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });
  }

  //渲染组建
  //https://github.com/haizlin/fe-interview/issues/952
  //https://blog.csdn.net/weixin_43459866/article/details/117279110
  // render(){
  //   return(
  //     <div>
  //       <p>{this.state.count}</p>
  //       <a href='#' onClick={this.handleClick}>更新</a>
  //     </div>
  //   )
  // }
  render() {
    return (
      <React.Fragment>
        <div>
          <p>{this.state.count}</p>
          <a href="#" onClick={this.handleClick}>
            更新
          </a>
        </div>
      </React.Fragment>
    );
  }
}

//产品组建
function Products() {
  const columns: ProColumns<API.IProduct>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: '产品名称',
      dataIndex: 'name',
    },
  ];
  return (
    <div>
      {/* <Counter></Counter> */}
      <PageContainer>
        <ProTable<API.IProduct> columns={columns}></ProTable>
      </PageContainer>
    </div>
  );
}

export default Products;
