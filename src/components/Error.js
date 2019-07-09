import React from "react";

const Error = ({ message }) => {
  return (
    <div className="row">
      <div className=" col-md-7 center">
        <div className={(!!message && "alert alert-danger") || ""}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Error;
