import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // Colect the login function from the AuthContext
  const { login } = useContext(AuthContext);
  // Create a function to handle the login
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Call the login function and pass the email and password as arguments
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Navigate to the page the user was trying to access
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="Login Image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-accent text-center">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
              <p className="text-center mt-4">
                New to Car Doctor?
                <Link to="/signup" className="text-accent font-bold">
                  Sign Up
                </Link>
              </p>
            </form>
            <SocialLogin from={from}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
