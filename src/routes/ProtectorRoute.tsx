import { ReactNode } from "react";
import { getFromLocalStorage } from "../utils/localStorage";
import { authKey } from "../types";
import { Navigate } from "react-router-dom";

const ProtectorRoute = ({ children }: { children: ReactNode }) => {
  const token = getFromLocalStorage(authKey);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectorRoute;
