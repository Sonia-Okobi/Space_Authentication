import React, { Children, createContext, ReactNode, useReducer } from 'react';
import { userReducer } from './reducers/user';
import { ActionTypesEnum, UserContext, UserContextProviderProps } from './type';

export const userContext = createContext<UserContext>({
  username: '',
  isAuthenticated: false,
  token: '',
  updateUser: () => {},
});


function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, dispatch] = useReducer(userReducer, {username: '', token: ''})

    function updateUser(data: any) {
        dispatch({
          type: ActionTypesEnum.update_user,
          data,
        });
      }

  return <userContext.Provider value={{ ...user, isAuthenticated: !!user?.token, updateUser}}>{children}</userContext.Provider>;
}

export default UserContextProvider;
