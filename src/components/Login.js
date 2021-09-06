import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="Login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login with GitHub
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Login with Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Login with Twitter
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
