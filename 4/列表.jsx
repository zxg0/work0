import React from 'react'
import ReactDOM from 'react-dom'

const per = {
    name: '张三',
    age: 11,
    sex: '女'
}
const per1 = {
    name:'李四'
}
//定义类型限制
People.propTypes = {
    
    name: String.isRequired,
    age :Number.isRequired,
    sex: String.isRequired,
}
//定义默认属性
People.defaultProps = {
    age : 18,
    sex : '男'
}
function People (props){
    return(
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.sex}</li>
        </ul>
        )
}

ReactDOM.render(
    <div>
    <People {...per}/>
    <People {...per1}/>
    </div>,
    document.getElementById('root')
    )