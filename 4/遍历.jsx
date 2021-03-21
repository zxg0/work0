import React from 'react'
import ReactDOM from 'react-dom'

const list = ["张三","李四","小明","小王"];

const Dd = (
    <ul>
      {
          list.map((name,index)=> <li key={index}>{name}</li>)
      }
    </ul>
)

ReactDOM.render(
    Dd,
    document.getElementById('root')
)