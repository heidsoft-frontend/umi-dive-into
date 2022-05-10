declare namespace API {
  interface IProduct {
    title: string;
  }
  interface IRole {
    isAdmin: boolean;
    isEditor: boolean;
  }
  interface IUser {
    id: number;
    name: string;
    password?: string;
    role?: IRole;
  }
}
