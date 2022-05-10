import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';

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
    <>
      <PageContainer>
        <ProTable<API.IProduct> columns={columns}></ProTable>
      </PageContainer>
    </>
  );
}

export default Products;
