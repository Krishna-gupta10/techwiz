import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [progress, setProgress] = useState(0);

  const getSearchItem = (a) => {
    setSearchValue(a);
    console.log(searchValue);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar getSearchItem={getSearchItem} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} key="in" pageSize={15} countryName="India" country="in" search={searchValue} />}
          />
          <Route
            exact
            path="/techwiz"
            element={<News setProgress={setProgress} key="in" pageSize={15} countryName="India" country="in" search={searchValue} />}
          />
          <Route
            exact
            path="/india-news"
            element={<News setProgress={setProgress} key="in" pageSize={15} countryName="India" country="in" search={searchValue} />}
          />
          <Route
            exact
            path="/us-news"
            element={<News setProgress={setProgress} key="us" pageSize={15} countryName="USA" country="us" search={searchValue} />}
          />
          <Route
            exact
            path="/canada-news"
            element={<News setProgress={setProgress} key="ca" pageSize={15} countryName="Canada" country="ca" search={searchValue} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;