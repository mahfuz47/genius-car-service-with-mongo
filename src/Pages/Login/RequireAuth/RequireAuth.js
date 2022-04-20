import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  if (sending) {
    return <Loading></Loading>;
  }

  if (error) {
    return (
      <div className="text-danger text-center">
        <h1>Please try with a valid email address</h1>
      </div>
    );
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center">
        <h1 className="text-danger">Your Email Is Not Verified</h1>
        <h4 className="text-primary">please varify your email</h4>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
          className="btn btn-primary"
        >
          Verify
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
