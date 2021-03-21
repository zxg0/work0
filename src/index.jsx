import {Component} from 'react';
import {render} from 'react-dom';
import './index.css'

class Cj extends Component {

    constructor(props){

        super(props);
        this.state = {
            start:0,
            reclick:false,
        }
    }

    handleClick=()=>{
        if(this.state.reclick === true){
            return false;
        }
        this.setState({reclick:true})
        let sw = setInterval(()=>{
            let {start} = this.state;
            if(start===0||start===1){
                start++;
            } else if(start=== 2 || start ===5){
                start += 3
            } else if(start === 8 || start === 7){
                start --;
            } else if(start === 6 || start ===3){
                start -= 3;
            }
            this.setState({start:start})
        },400)
        

        let sd =  null;
        let end = 0;
        let sum = Math.random();
        if(sum > 0.97){
            end = 3
        } else if(sum > 0.94){
            end = 8
        } else if(sum > 0.9){
            end = 2
        } else if(sum > 0.75){
            end = 7
        } else if(sum > 0.6){
            end = 1
        } else if(sum > 0.4){
            end = 6
        } else{
            end = 5
        }
        setTimeout(() => {
            clearTimeout(sw)
            sd = setInterval(()=>{
                let {start} = this.state;
                if(start===0||start===1){
                    start++;
                } else if(start=== 2 || start ===5){
                    start += 3
                } else if(start === 8 || start === 7){
                    start --;
                } else if(start === 6 || start ===3){
                    start -= 3;
                }
                this.setState({start:start})
            },300)
            setTimeout(() =>{
                clearTimeout(sd)
                let zz = setInterval(()=>{
                    let {start} = this.state;
                    if(start===0||start===1){
                        start++;
                    } else if(start=== 2 || start ===5){
                        start += 3
                    } else if(start === 8 || start === 7){
                        start --;
                    } else if(start === 6 || start ===3){
                        start -= 3;
                    }
                    if (start === end){
                        console.log("ssssssssss" + end)
                        start = end;
                       
                    }
                    
                    this.setState({start:start})
                    if (this.state.start === end){
                         clearInterval(zz)
                    }
                },500)
            },2400)

        },3200);
    }
    

  

    render() {

        let {start} = this.state;
        if(start === 4){
            start++
        }
        console.log(start)
        const list = ['谢谢参与','10元','50元','100元','点击抽奖','谢谢参与','10元','50元','100元',]
        let box = list.map(
            (item,index)=>(index===4?<button id='button' onClick= {this.handleClick} className='littlebox' key={index}>{item}</button>:<div id={start===index?'yes':'no'} className='littlebox' key={index} >{item}</div>))
        return<div className ='bigbox'>{box}</div>
    }

}

render(<Cj />,document.getElementById("root"));
