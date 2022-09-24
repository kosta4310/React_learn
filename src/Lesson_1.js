import React, { Component } from "react";
import ReactDom from "react-dom";

const LevelOne = () => <LevelTwo ></LevelTwo>
const LevelTwo = () => <LevelThree ></LevelThree>;
const LevelThree = () => (
   <TitleContext.Consumer>{(title) => <h1>{ title}</h1>}</TitleContext.Consumer>
);

const TitleContext = React.createContext();
class Lesson extends Component{
   render() {
      return (
         <TitleContext.Provider value="simple title">
            <LevelOne ></LevelOne>
         </TitleContext.Provider>)
         
   }
}

export default Lesson;