import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
    return (
            <div className="card my-3">
                <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/oneplus_11r-sixteen_nine.png?VersionId=v8Ijt1bboeQA_Jfsny2wsOktmmd9EHXU":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href= {newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
            </div>
    )
  }
}

export default Newsitem
