import { UserInfoInterface } from '../Interfaces/Users/index.interface';
export const setUserInfo = ({ id, userType }: UserInfoInterface) => {
  localStorage.setItem('userInfo', JSON.stringify({ id, userType }));
};

export const getUserInfo = (): UserInfoInterface | null => {
  const userInfoJSON = localStorage.getItem('userInfo');

  if (!userInfoJSON) {
    return null;
  }
  return JSON.parse(userInfoJSON);
};

export const deleteUserInfo = () => {
  localStorage.removeItem('userInfo');
};
