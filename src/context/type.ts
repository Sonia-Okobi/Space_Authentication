import { ReactNode } from 'react';

export type User = {
  username: string;
  token: string;
};

export type UserContext = User & {
  isAuthenticated: boolean;
  updateUser: (data: any) => void;
};

export type UserContextProviderProps = {
  children: ReactNode;
};

export enum ActionTypesEnum {
  update_user = 'update_user',
  update_username = 'update_username',
}
