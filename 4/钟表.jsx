import React from 'react'
import ReactDOM from 'react-dom'


// 钟表
//现在是下午10:54:04
// 现在是2020/11/13
// 现在是22:54:04 GMT+0800 (中国标准时间)
// 现在是Fri Nov 13 2020
function click(){
    const time = <div>
        <h1>现在是{new Date().toLocaleTimeString()}</h1>
        <h1>现在是{new Date().toLocaleDateString()}</h1>
        <h1>现在是{new Date().toTimeString()}</h1>
        <h1>现在是{new Date().toDateString()}</h1>
    </div>
    ReactDOM.render(
        time,
        document.getElementById('root')
    )
}
setInterval(click,1000);



//分别用函数式和类

function Clock1(props){
    return (
        <div>
            <h1>Hello World</h1>
            <div>现在是{props.date.toLocaleTimeString()}</div>   
        </div>
    )
}
function Clock2(){
    ReactDOM.render(
        <div>
        <Clock1 date={new Date()} />
        <Clock3 />
        </div>,
        document.getElementById('root')
    )
}

class Clock3 extends React.Component{
   render(){
       return<Clock1 date={new Date()}/>
   }
}
setInterval(Clock2,1000);setInterval(Clock3,1000);

//函数Date().toLocaleTimeString()，必须存在构造方法，否则不显示。
class Clock4 extends React.Component{
    render(){
        return <div>
            <h1>现在是{this.props.date.toLocaleTimeString()}</h1>
        </div>
    }
}
function re(){
    ReactDOM.render(
        <Clock4 date={new Date()} />,
        document.getElementById('root')
    )
}
setInterval(re,1000);