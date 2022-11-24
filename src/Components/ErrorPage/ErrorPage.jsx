import React from "react";
import "./ErrorPage.css";
import notFound from "../../images/notFound.png";

export default function () {
  return (
    <div className="text-center mx-auto">
      <img src={notFound} className="w-50" alt="not found" />
    </div>
  );
}
