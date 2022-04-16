import { signOut } from 'firebase/auth';
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/secret">Secret</Link>
      {!user ? <Link to="/login">Login</Link> : <button onClick={()=>signOut(auth)}>logout</button>}
    </div>
  );
};

export default Header;
