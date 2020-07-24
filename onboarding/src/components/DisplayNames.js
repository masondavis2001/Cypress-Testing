import React from "react";

const DisplayNames = ({users}) => {
  return(
      <div>
        <h3>{users.name}</h3>
        <h4>{users.email}</h4>
        <p>{users.password}</p>
        <p>{users.terms}</p>
      </div>
  )}

  export default DisplayNames;