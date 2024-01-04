import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    <div className="container bg-dark">
      <h4> You Have Error : {error} </h4>
    </div>;
  }

  render() {
    if (this.state.hasError) {
      return this.state.fallback;
    }
    return this.props.children;
  }
}
