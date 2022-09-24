import React, { Component } from "react";
import ReactDom from "react-dom";

class MyPortal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

class Lesson extends Component {
   state = {
      count: 0,
   }

   handlerClick = () => {
      console.log(this.state.count);
      this.setState(({count}) => ({ count: ++count }));
      
   }
   render() {
      return (
        <div>
          <span>Text</span>
          <MyPortal>
            <div>Test Portal</div>
               <button onClick={this.handlerClick}>click</button>
               <div>{ this.state.count}</div>
          </MyPortal>
        </div>
      );
   }
}

// export default Lesson;
