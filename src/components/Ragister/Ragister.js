import React, { useRef, useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSendEmailVerification,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Ragister.css";

const Ragister = () => {
  // user create usign email   and pass
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendEmailVerification, sending, varificationError] =
    useSendEmailVerification(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  //reference by input field
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");

  //from submit button

  const fromSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    alert("Sent email");

    await updateProfile({ displayName: name });
    alert("Updated profile");
  };
  return (
    <div>
      <h1>Ragister</h1>
      <hr />
      <form onSubmit={fromSubmit} action="">
        <div>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name"
            ref={nameRef}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="email"
            ref={emailRef}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            ref={passRef}
          />
          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="checkbox"
              id=""
            />
            <label className={!agree ? "red" : "green"} htmlFor="checkbox">
              accepet tarms & condition
            </label>
          </div>
        </div>
        <input disabled={!agree} type="submit" value="Sign up" />
      </form>
      <Link to='/login'>login here</Link>
    </div>
  );
};

export default Ragister;
