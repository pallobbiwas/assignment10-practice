import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, loginUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gihubuser, githubloading, githuberror] =
    useSignInWithGithub(auth);
    const [signInWithFacebook, facebookuser, facebookloading, facebookerror] = useSignInWithFacebook(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.form?.pathname || "/";
  let errorMassage;
  const fromSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  if (loginUser || googleuser || gihubuser) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorMassage = <p>Error: {error?.message}</p>;
  }
  if (googleerror || githuberror) {
    errorMassage = <p>duplicate account not allow</p>;
  }
  //login method
  const googleLogIn = () => {
    signInWithGoogle();
  };
  const githubLogin = () => {
    signInWithGithub();
  };
  const facebookLogin = () => {
    signInWithFacebook()
  }
  const forgetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div>
      <h1>login</h1>
      <div>
        <div>
          <form onSubmit={fromSubmit} action="">
            <input
              type="email"
              name="email"
              id=""
              placeholder="email"
              required
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
              ref={passRef}
            />
            {errorMassage}
            <button>login</button>
          </form>
          <div>
            <button onClick={googleLogIn}>login with google</button>
            <button onClick={githubLogin}>login with github</button>
            <button onClick={facebookLogin}>login with facebook</button>
          </div>
        </div>
        <div>
          <button onClick={forgetPassword}>forget password</button>
          <Link to="/ragister">ragister here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
