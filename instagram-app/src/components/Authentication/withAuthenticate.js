import React from "react";

const withAuthenticate = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      );
    }
  };

export default withAuthenticate;
