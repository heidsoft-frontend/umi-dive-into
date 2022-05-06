import { FC } from 'react';
import ProLayout from '@ant-design/pro-layout';
// 侧边栏的默认关闭需要设置 breakpoint={false} ，如果只设置 defaultCollapsed 会无效
const BasicLayout: FC = ({ children }) => {
  return (
    <ProLayout layout="mix" fixSiderbar defaultCollapsed breakpoint={false}>
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
