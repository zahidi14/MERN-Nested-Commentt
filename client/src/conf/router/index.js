import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "../../page/CreateBlog";
import ViewBlog from "../../page/ViewBlog";
import { Content } from "../../page";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/create" element={<CreateBlog />} />

      <Route path="/view" element={<ViewBlog />} />
    </Routes>
  );
};

export default Router;
