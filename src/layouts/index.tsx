import React, { ReactNode } from 'react';
interface IProps {
  children?: ReactNode;
}

function Index(props: IProps) {
  return <div style={{ color: 'red' }}>{props?.children}</div>;
}

export default Index;
