import React, { Component } from "react";
import PropTypes from "prop-types";

export const CounterButton = ({ count = 0 }) => {
  return <div>{`Counter value is ${count}`}</div>;
};

export const Button = () => <button>new button</button>;

export class Counter extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  static defaultProps = {
    children: null,
  };

  state = {
    count: 0,
  };

  handlerClick = () => {
    this.setState(({ count }) => ({ count: ++count }));
  };

  render() {
    const { count } = this.state;
    const { children, child } = this.props;
    return (
      <>
        {/* <CounterButton count={count} func={() => {}} str="str"></CounterButton> */}
        <div>{count}</div>
        {React.cloneElement(children, { count: this.state.count })}
        <button onClick={this.handlerClick}>Click me</button>
        {child}
      </>
    );
  }
}

CounterButton.propTypes = {
  count: PropTypes.number,
  func: PropTypes.func,
  str: PropTypes.string,
};

// export default Counter;
