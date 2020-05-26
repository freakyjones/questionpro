import React from 'react'
import Main from './Main'
import Header from './header'

import  css from '../style/App.css'
class App extends React.Component{
    render(){
        return(
            <div id="app">
                <Header/>
                <Main/>
            </div>
        )
    }
}
export default App;