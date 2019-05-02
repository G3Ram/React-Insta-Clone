import React from "react";

const withAuthenticate = WrappedComponent => WrappedComponent2 =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({ isLoggedIn: false });
      } else {
        this.setState({ isLoggedIn: true });
      }
    }
    render() {
      if (this.state.isLoggedIn) {
        return (
          <div>
            <WrappedComponent />
          </div>
        );
      } else {
        return (
          <div>
            <WrappedComponent2 />
          </div>
        );
      }
    }
  };

export default withAuthenticate;
