import React from 'react';
import { ActionTypesEnum, User } from '../type';

type Action =
  | { type: ActionTypesEnum.update_user; data: User }
  | { type: ActionTypesEnum.update_username; data: string };

export function userReducer(state: User, action: Action) {
  switch (action.type) {
    case ActionTypesEnum.update_user:
      return action.data;
    case ActionTypesEnum.update_username:
      return { ...state, userName: action.data };
    default:
      return state;
  }
}
