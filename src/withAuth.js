import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const isAuthenticated = true; // Replace with your own authentication logic

  return class extends React.Component {
    render() {
      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to="/signin" />;
      }
    }
  };
};

export default withAuth;
