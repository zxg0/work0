import React from 'react'
import ReactDOM from 'react-dom'

class Div extends React.Component{
    constructor(){
        super()
        this.showInput = this.showInput.bind(this)
        this.handleBlur= this.handleBlur.bind(this)
    }
//失去焦点的函数 ，event获得发生事件的组件   
handleBlur(event){
    alert(event.target.value)
}
//button被点击的函数
showInput(){
    const input = this.input
    alert(input.value)
}

    render(){
        return <div>
        <input  type="text" id="text" ref={input => this.input = input} /><br/>
        <button onClick={this.showInput}>提示</button><br/>
        <input type="text" placeholder="ssssssss" onBlur={this.handleBlur} />    
        </div>
    }
}

ReactDOM.render(
    <Div />,
    document.getElementById('root')
)