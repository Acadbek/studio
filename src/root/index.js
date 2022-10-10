import React, { Fragment } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { navbar } from "../utils/navbar";
// import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};

export default Root;
