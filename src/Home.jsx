import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (loading) return <p>Loding...</p>;

  return (
    <div>
      Wellcome,{user.email} <br />
      <button
        className="bg-black text-white tounded p-1"
        onClick={handleLogOut}
      >
        LogOut
      </button>
    </div>
  );
};

export default Home;
