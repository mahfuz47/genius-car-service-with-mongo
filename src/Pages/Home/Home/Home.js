import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";

const Home = () => {
  // const [user] = useAuthState(auth);
  // if (user) {
  //   toast("Login Successful");
  // }

  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Home;
