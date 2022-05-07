export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    id: 1,
    name: '云服务圈',
  });
}
