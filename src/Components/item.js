import React from 'react'

const Item=(props)=>{
    // const interval=this.setInterval((id)=>{
    //             id
    // },1500)
    
    return(
    <div className="item">
        <div id="question">
        <h1>{props.question[0].heading}</h1>
    <p>A: {props.question[1].hint[0]}</p>
    <p>B: {props.question[1].hint[1]}</p>
    <p>C: {props.question[1].hint[2]}</p>
    <p>D: {props.question[1].hint[3]}</p>
        </div>
        {props.submit?
        <div id="submitted" style={{textAlign:'center'}}>
            <h1 style={{color:'#fff'}}>submitted</h1>
        </div>
            
         :<div id="answer">
            <form  onSubmit={()=>props.handlesubmit(props.id,props.updated,props.answer) } >
           <input type="text" placeholder="your answer" name="ans" onChange={props.handlechange}/>
           <button type="submit"  >submit</button>
           </form>
        </div>}
    </div>
      
    )
}
export default Item;