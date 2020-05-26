import React from 'react'
import item from './itemlist'
import Item from './item'
import css from '../style/Main.css'
import Result from './result'
class Main extends React.Component{
    constructor(){
        super()
        this.state={
            items:item,
            difficulty:'',
            updated:[],
            ans:'',
            submitstatus:false,
            marks:0,
            is_show:false
        }
        this.handleclick=this.handleclick.bind(this)
        this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
        this.check=this.check.bind(this)
    }
    handleclick(event){
       const diffi=event.target.value;
       this.setState({difficulty:diffi})   
       const updateditem=this.state.items.filter(res=>{
           if(res.difficulty=== diffi ){
               return res;
           }
       })
       console.log(updateditem)
       this.setState({updated:updateditem})
    }
    handlechange(event){
     const {name,value}=event.target
     this.setState({[name]:value});
     console.log(this.state.ans)
    }
    handlesubmit(id,updated,answer){

        event.preventDefault()
     this.setState(prevstate=>{
         const updateditem=this.state.updated.map(element=>{
                if(element.id===id){
                    element.is_submitted=true
                }
                return element;
         })
         return{
             updated:updateditem
         }
        
     })

     this.state.updated.map(element=>{
         if(element.id===id){
            if(element.answer=== parseInt(answer) ){
              this.setState((prevstate)=>{
                const  newmarks= this.state.marks+1
                 return{
                     marks:newmarks
                 }
              })
            }else{
                console.log('incorrect')
            }
         }else{
             console.log('not')
         }
         
     })
     this.check();
    }
    timer(submit){
        setTimeout(() => {
            submit=false
        }, 6000);
    }
    check(){
        this.state.items.filter(element=>{
            const sub=(element.is_submitted)
            console.log(sub)
            if(sub===null){
                return;
            }else if(sub===null &&(sub===true || sub===false) ){
                console.log('hello1')
            }else if( sub!=null){
               this.setState({is_show:true})
        }
          
         
        })
        
    }
    // componentDidMount(){
    //     fetch('https://opentdb.com/api.php?amount=10')
    //     .then(res=>{
    //       res.json();
    //     })
    //     .then(data=>{
    //        console.log(data)
    //     })
    // }
  
    render(){
   

        const length=this.state.items.length;


        const data=this.state.updated.map(res=>{
           return <Item
           key={res.id}
           id={res.id}
           question={res.question}
            answer={this.state.ans}
            handlechange={this.handlechange}
            handlesubmit={this.handlesubmit}
            updated={this.state.updated}
            submit={res.is_submitted}
        
            correct={this.state.marks}
            timer={this.timer}
           />
        })

       
        return(

            <div id="main">
                <h1>choose the difficulty level</h1>
                <div id="change">
                  <div id="easy">
                  <button onClick={this.handleclick} value="easy">easy</button>
                  </div>
                  <div id="medium">
                  <button onClick={this.handleclick} value="medium">medium</button>
                  </div>
                  <div id="hard">
                  <button onClick={this.handleclick} value="hard">hard</button>
                  </div>
                </div>
                <div id='items'>
               
                {data}
               
                </div>
                {this.state.is_show? <Result
                marks={this.state.marks}
                total={length}
                show={this.state.is_show}
                />:''}
               
               
               
            </div>
        )
    }
}
export default Main