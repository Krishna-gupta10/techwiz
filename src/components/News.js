import React, { Component } from 'react'
import Newsitem from './Newsitem';


export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc7668713a914b3da08805f0114db92c&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }

    handlePrevClick = async()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc7668713a914b3da08805f0114db92c&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({
            page: this.state.page - 1,
            articles: parsedData.articles,
        })
    }

    handleNextClick = async()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc7668713a914b3da08805f0114db92c&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});

        this.setState ({
            page: this.state.page + 1,
            articles: parsedData.articles,
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Today's Tech Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key= {element.url}>
                            <Newsitem title={element.title?element.title.slice(0,35):""} description={element.description?element.description.slice(0,70):""} imageUrl= {element.urlToImage} newsUrl= {element.url} />
                        </div>
                    })}
                </div>

                <div className= "container d-flex justify-content-between">
                <button disabled={this.state.page <=1} type="button" class="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}

export default News