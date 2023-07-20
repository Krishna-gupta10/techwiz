import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: [],
    };
  }

  // Fetch Data from API
  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=technology&apiKey=dc7668713a914b3da08805f0114db92c&page=${this.state.page}&pageSize=${this.props.pageSize}${this.props.search}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  // Handle page navigation
  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.setState(
        {
          page: this.state.page - 1,
        },
        () => {
          this.fetchData();
        }
      );
    }
  };

  handleNextClick = () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState(
        {
          page: this.state.page + 1,
        },
        () => {
          this.fetchData();
        }
      );
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.fetchData();
    }


  }

  render() {
    return (
      <div className="container my-3">
        <div className="text-center my-4">
          <h1>Top Tech Headlines of {this.props.countryName}</h1>
        </div>

        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 35) : ''}
                  description={element.description ? element.description.slice(0, 70) : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
