/**
 * 组建通信测试
 */

import React, { useState } from 'react';

//列表标题
function ListTitle({ title }) {
  return <div>{title}</div>;
}

//列表项组建
function ListItem({ title }) {
  return (
    <li>
      <span>{title}</span>
    </li>
  );
}

// 列表组建
function List({ list }) {
  return (
    <div>
      <ul>
        {list.map((item) => {
          const { id, name } = item;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

// 父组建
function ParentChild() {
  //https://blog.csdn.net/qq_41885921/article/details/119614023
  //https://www.jianshu.com/p/d575271ad4b2
  //https://juejin.cn/post/6877787139452207112
  //https://www.cnblogs.com/BNTang/articles/16125967.html
  const [list, setList] = useState([
    //使用状态存储初始化数组
    {
      id: 1,
      name: 'c++',
    },
    {
      id: 2,
      name: 'java',
    },
  ]);
  // const list =[
  //   {
  //     id:1,
  //     name: 'c++'
  //   },{
  //     id:2,
  //     name: 'java'
  //   }
  // ];
  return (
    <div>
      <List list={list} />
    </div>
  );
}

export default ParentChild;
