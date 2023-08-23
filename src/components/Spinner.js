import React from 'react'
import loading from './loading.gif'

function Spinner() {
    return (
      <div className="text-center my-3">
        <img  src= {loading} alt= "Loading"></img>
      </div>
    )
}

export default Spinner