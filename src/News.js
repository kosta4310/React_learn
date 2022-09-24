import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

class News extends Component {
   state = {
      searchQuery: '',
      result: {},
   }

   componentDidMount() {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
   }

   handleInputChange = ({ target: { value } }) => {
      this.setState({
         searchQuery: value,
      })
   }

   getSearch = ({ key }) => {
      if (key === 'Enter') {
         const { searchQuery } = this.state;
         this.fetchData(searchQuery);
         this.setState({
            searchQuery: '',
         })
      }
   }

   fetchData = (searchQuery) => {
      fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
        .then((res) => res.json())
        .then((result) => this.setNews(result))
        .catch((err) => err);
   }

   setNews = result => {
      this.setState({ result: result });
    }

   render() {
      const { searchQuery, result } = this.state;
      const { hits = [] } = result;
      
      return (
         <div>
            <h1>News</h1>
            <input onKeyDown={this.getSearch} onChange={this.handleInputChange} value={searchQuery}></input>
            <ul>
               {hits.map(({ author, created_at, num_comments, title, points }, idx) => <li key={`${idx}-${created_at}-${num_comments}`}>{author}{created_at} {num_comments}{title} { points}</li>)}
            </ul>
         </div>
      )
   }
}

export default News;