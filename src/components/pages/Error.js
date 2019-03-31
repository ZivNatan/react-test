import React from "react";

class Error extends React.Component {
  render() {
    return (
      <div style={{ padding: "24px" }}>
        <h1>Error!</h1>
        <p>This path is not exsit</p>
      </div>
    );
  }
}

export default Error;
