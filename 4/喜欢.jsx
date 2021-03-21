import React from 'react'
import ReactDOM from 'react-dom'


class Like extends React.Component{
    constructor (props) {
        super(props)//必须先调用父类构造方法，初始化状态
        this.state = {
            isLikeMe : false
        }

        //将新增方法中this强制绑定为组件对象
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        //得到状态并取反
        const isLikeMe = ! this.state.isLikeMe
        //更新状态
        this.setState({isLikeMe})
    }
    render(){
        //得到状态
        const {isLikeMe }= this.state
        return (
          <h1 onClick = {this.handleClick}>{isLikeMe ? '你喜欢我' : '我喜欢你'}</h1>  
        )        
    }

}
ReactDOM.render(
    <Like />,
    document.getElementById('root')
    )