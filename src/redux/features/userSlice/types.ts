export interface UserState extends User {
  isLogged: boolean;
}

export interface User {
  id: string;
  token: string;
  username: string;
}
