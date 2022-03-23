import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "./../provioders/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
