import React from 'react'

function Newsitem(props)  {
    let {title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="card my-3">

        <div>
          <span className="badge rounded-pill bg-danger" style={{ display: 'flex', right: '0', justifyContent: 'flex-end', position: 'absolute' }}>
            {source}
          </span>
        </div>

        <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/oneplus_11r-sixteen_nine.png?VersionId=v8Ijt1bboeQA_Jfsny2wsOktmmd9EHXU" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...  </h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          <p className="card-text"><small className="text-body-secondary">Published at {new Date(date).toGMTString()} by {author}</small></p>
        </div>
      </div>
    )
}

export default Newsitem