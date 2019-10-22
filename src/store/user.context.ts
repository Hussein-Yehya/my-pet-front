import React from 'react';
import { getUserInfo } from '../helpers/user';
import { UserInfoInterface } from '../Interfaces/Users/index.interface';

const UserContext = React.createContext<[UserInfoInterface | null, any]>([
  getUserInfo(),
  () => {}
]);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
