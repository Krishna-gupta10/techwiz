import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=technology&apiKey=dc7668713a914b3da08805f0114db92c&page=${page}&pageSize=${props.pageSize}${props.search}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=technology&apiKey=dc7668713a914b3da08805f0114db92c&page=${page + 1}&pageSize=${props.pageSize}${props.search}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles([...articles, ...parsedData.articles]);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [props.country, props.search]);

  return (
    <>
      <div className="text-center my-4">
        <h1 style = {{marginTop: '80px'}}>Top Tech Headlines of {props.countryName}</h1>
      </div>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 35) : ''}
                  description={element.description ? element.description.slice(0, 70) : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;