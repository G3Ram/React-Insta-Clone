import React from "react";

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

  componentWillMount() {
    window.location.reload();
  }

  componentWillUnmount() {
    localStorage.removeItem("username");
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={this.handleChangeUserName}
            value={this.state.username}
          />
          <input
            type="text"
            placeholder="password"
            onChange={this.handleChangePassword}
            value={this.state.password}
          />
          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
