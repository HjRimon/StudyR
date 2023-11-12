import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email };
        axios
          .post("https://study-assignment-server-lac.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
        e.target.reset();
        localStorage.setItem("loginSuccess", "true");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed. Please try again.");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center hero min-h-screen bg-base-200 font-pec">
      <ToastContainer position="top-right" autoClose={3000} />
      <img className="h-[700px] w-[800px]" src="https://i.ibb.co/TryB3Gg/zyro-image.png" />
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="font-semibold">
              New to this website?
              <Link to={"/regi"}>
                <button className="btn btn-link">Please register</button>
              </Link>
            </p>
            <p>
              <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle></FaGoogle>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
