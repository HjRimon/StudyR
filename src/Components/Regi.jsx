import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Regi = () => {
  const { createUser, signInWithGoogle, updateDisplayName } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }
    setPasswordError("");
  };

  const handleRegi = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const name = e.target.elements.name.value;

    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateDisplayName(name)
          .then(() => {
            console.log(result.user);
            e.target.reset();
            localStorage.setItem("registrationSuccess", "true");
            // navigate("/");
            navigate(location?.state ? location?.state : "/");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Error updating displayName");
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration failed. Please try again.");
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
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
        <img
          className="h-[700px] w-[800px]"
          src="https://i.ibb.co/Fn7NJJG/undraw-Agreement-re-d4dv-removebg-preview.png"
        />
      </div>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegi}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="URL"
                  placeholder="Your photo"
                  required
                  className="input input-bordered"
                />
              </div>
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
                  className={`input input-bordered ${passwordError ? "input-error" : ""}`}
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <div className="text-error">{passwordError}</div>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="font-semibold">
              Already have an account?
              <Link to={"/login"}>
                <button className="btn btn-link">Please Login</button>
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

export default Regi;
