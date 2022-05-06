import React, { ReactNode } from 'react';

// 占位符
interface IProps {
  children?: ReactNode;
}

//
function Index(props: IProps) {
  return <div style={{ color: 'red' }}>{props?.children}</div>;
}

export default Index;
