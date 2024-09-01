import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading Route...</p>;
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
