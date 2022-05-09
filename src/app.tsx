export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    id: 0,
    name: '云服务圈',
    role: {
      isAdmin: true,
      isEditor: false,
    },
  });
}
