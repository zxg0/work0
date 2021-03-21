import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            thing : ["吃饭","睡觉","打游戏"]
        }
        this.add = this.add.bind(this)
    }
    add(th){
        const {thing} = this.state
        thing.unshift(th)
        this.setState({thing})
    }   
    render(){
        const dd = this.state.thing
        const nn = this.state.thing.length+1
        return<div>
        <h1>要做的事</h1>
        <Add num ={nn} add={this.add}/>
        <ListT n={dd} />
        </div>}
}



class Add extends React.Component{
    constructor(){
        super() 
        this.handleClick= this.handleClick.bind(this)
    }
    
    handleClick(){
        const input = this.input.value
        this.props.add(input)
        this.input.value = ""
    }
    render(){
        return<div>
        <input ref={input => this.input = input}/>
        <button onClick={this.handleClick}>添加 #{this.props.num}</button>
        </div>}
}

class ListT extends React.Component{
    render(){
        return <ul>
        {this.props.n.map((name,index)=> <li key={index}>{name}</li>)}
        </ul>
    }}

ReactDOM.render(
    <App />,
    
    document.getElementById('root'))