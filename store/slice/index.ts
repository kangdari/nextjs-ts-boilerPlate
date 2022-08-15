import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import count, { Count } from "./count";

export interface State {
  count: Count;
}

const combineReducer = combineReducers({
  count,
});

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof combineReducer>;

// useSelector의 기본 상태 타입을 DefaultRootState로 설정
declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
