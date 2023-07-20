import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };
  }

  getSearchItem = (a) => {
    this.setState(
      {
        searchValue: a,
      },
      () => {
        console.log(this.state.searchValue);
      }
    );
  };


  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar getSearchItem={this.getSearchItem} />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="in" pageSize={15} countryName="India" country="in"search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/india-news"
              element={<News key="in" pageSize={15} countryName="India" country="in" search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/us-news"
              element={<News key="us" pageSize={15} countryName="USA" country="us" search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/canada-news"
              element={<News key="ca" pageSize={15} countryName="Canada" country="ca" search={`&q=${this.state.searchValue}`} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
