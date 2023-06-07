import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGooglesignin = ({from}) => {
    googleSignIn()
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate(from, { replace: true });
    }).catch((error) => {
        console.log(error);
    });
  };

  return (
    <div>
      <button
        onClick={handleGooglesignin}
        className="btn w-full btn-primary btn-outline"
      >
        Google Signin
      </button>
    </div>
  );
};

export default SocialLogin;
