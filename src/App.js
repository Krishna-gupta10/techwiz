import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

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

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar getSearchItem={this.getSearchItem} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="in" pageSize={15} countryName="India" country="in" search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/techwiz"
              element={<News setProgress={this.setProgress} key="in" pageSize={15} countryName="India" country="in" search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/india-news"
              element={<News setProgress={this.setProgress} key="in" pageSize={15} countryName="India" country="in" search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/us-news"
              element={<News setProgress={this.setProgress} key="us" pageSize={15} countryName="USA" country="us" search={`&q=${this.state.searchValue}`} />}
            />
            <Route
              exact
              path="/canada-news"
              element={<News setProgress={this.setProgress} key="ca" pageSize={15} countryName="Canada" country="ca" search={`&q=${this.state.searchValue}`} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
