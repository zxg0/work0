import React from 'react'
import ReactDOM from 'react-dom'


class Life extends React.Component {
    constructor(props){
        super(props)
        this.state={
            opacity:1
        }
        this.unMount = this.unMount.bind(this)
    }

    unMount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount(){
        this.id = setInterval(function(){
            let {opacity} = this.state
            opacity -=0.1
            if(opacity<=0){
                opacity=1
            }
            this.setState({opacity})
        }.bind(this),200)
    }

    componentWillUnmount(){
        clearInterval(this.id)
    }

    render() {
        const {opacity} = this.state
        return<div>
            <h2 style={{opacity: opacity}}>{this.props.msg}</h2>
            <button onClick={this.unMount}>不活了</button>
            </div>
    }
}

ReactDOM.render(
    <Life msg="它太难了"/>,
    document.getElementById('root')
)