export interface LoginResult {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
