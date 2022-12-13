import React, { useEffect } from 'react';

// 钩子测试，副作用主要用于生成对网页的操作
// https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html?from_wecom=1
function Effecthook(props) {
  //useEffect()的参数是一个函数，它就是所要完成的副效应（改变网页标题）。组件加载以后，React 就会执行这个函数。
  //useEffect()的作用就是指定一个副效应函数，组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。
  //有时候，我们不希望useEffect()每次渲染都执行，这时可以使用它的第二个参数，使用一个数组指定副效应函数的依赖项，只有依赖项发生变化，才会重新渲染。

  useEffect(() => {
    document.title = '加载完成';
  });
  return <h1>Hello, {props.name}</h1>;
}
export default Effecthook;
