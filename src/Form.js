import React, { Component, Fragment } from "react";

const Position = [
  {
    id: "fd",
    value: "Front-end developer",
    title: "Front-end developer",
   },
   {
    id: "bd",
    value: "Back-end developer",
    title: "Back-end developer",
  },
];

class Form extends Component {
  state = {
    inputText: "",
    textareaText: "",
    selectText: "Front-end developer",
    showData: {
      name: "",
      text: "",
      position: "",
    },
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({ textareaText: value });
  };

  handleSelectChange = ({ target: { value } }) => {
    this.setState({ selectText: value });
  };

  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: "",
      textareaText: "",
      selectText: "",
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;
    return (
      <Fragment>
        <form>
          <label>
            Name{" "}
            <input
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <br />
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            value={textareaText}
            onChange={this.handleTextareaChange}
          ></textarea>
          <br />
             <select value={selectText} onChange={this.handleSelectChange}>
                {Position.map(({id, value, title}) => {
                   return (
                     <option key={id} value={value}>
                       {title}
                     </option>
                   );

                })}
            {/* <option value="Front-end developer">Front-end developer</option>
            <option value="Back-end developer">Back-end developer</option> */}
          </select>
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h1>{name}</h1>
        <p>{text}</p>
        <p>{position}</p>
      </Fragment>
    );
  }
}

export default Form;
