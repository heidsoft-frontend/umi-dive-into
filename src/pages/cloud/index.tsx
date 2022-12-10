import React from 'react';
import { Tabs } from 'antd';

function Cloud() {
  return (
    <div>
      Cloud
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `云账号`,
            key: '1',
            children: `账号`,
          },
          {
            label: `云主机`,
            key: '2',
            children: `云主机`,
          },
        ]}
      />
    </div>
  );
}

export default Cloud;
