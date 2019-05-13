import React from "react";
import "./Login.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = () => {
    console.log("clicking login");
    if (!localStorage.getItem("username")) {
      localStorage.setItem("username", this.state.username);
    } else {
      console.log(
        "Using data from local storage" + localStorage.getItem("username")
      );
    }
  };

  handleChangeUserName = e => {
    console.log("Inside handle change vlaue is " + e.target.value);
    this.setState({ username: e.target.value });
  };

  handleChangePassword = e => {
    console.log("Inside handle change password value is " + e.target.value);
    this.setState({ password: e.target.value });
  };

  //   componentWillMount() {
  //     window.location.reload();
  //   }

  //   componentWillUnmount() {
  //     localStorage.removeItem("username");
  //   }

  render() {
    return (
      <div>
        <div className="loginForm">
          <form className="formContent" onSubmit={this.login}>
            <img
              className="loginLogo"
              src="../img/instagramText.png"
              alt="instagram text"
            />
            <input
              type="text"
              placeholder="username"
              className="userInput"
              onChange={this.handleChangeUserName}
              value={this.state.username}
            />
            <input
              type="text"
              placeholder="password"
              className="userInput"
              onChange={this.handleChangePassword}
              value={this.state.password}
            />
            <button className="loginBtn" onClick={this.login}>
              Login
            </button>
            <img
              className="forgotPassword"
              src="../img/loginImgFB.png"
              alt="forgot password text"
            />
          </form>
        </div>
        <div className="signupForm">
          Don't have an account? <span className="signUpTxt">Sign Up</span>
        </div>
        <img className="footer" src="../img/footer.png" alt="footer" />
      </div>
    );
  }
}

export default Login;
