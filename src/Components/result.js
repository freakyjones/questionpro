import React from 'react'

const Result=(props)=>{
    return(
        <div id="result">
          { props.show? <div>
            <h1>correct:{props.marks}</h1>
            <h2>total:{props.total}</h2>
            <h3>incorrect:{props.total-props.marks}</h3>
          </div>  :''}
            
            </div>
    )
}

export default Result;