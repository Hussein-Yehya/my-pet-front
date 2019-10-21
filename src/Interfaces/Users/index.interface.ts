export interface UserInterface {
  id: string;
  name: string;
  email: string;
  userType: 'COMMON' | 'ADMIN';
}

export interface UserInfoInterface {
  id: string;
  userType: 'COMMON' | 'ADMIN';
}
