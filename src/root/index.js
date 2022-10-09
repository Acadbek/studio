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
          {navbar.map(({ element, path, id, title }) => {
            return (
              <Route element={element} path={path} key={id}>
                {title}
              </Route>
            );
          })}
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
