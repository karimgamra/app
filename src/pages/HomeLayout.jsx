import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const value = "some value";

  return (
    <>
      <NavBar />
      <section className="page">
        {isLoading ? <div className="loading" /> : <Outlet context={value} />}
      </section>
    </>
  );
};

export default HomeLayout;
