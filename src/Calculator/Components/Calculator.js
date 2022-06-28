import React from "react";
import Button from "./Button";
import "./calculator.css"
class Calculator extends React.Component{
    state = {result:0, updatedVal:0};
    tmpStack = [];
    parseResult = (callbackVal)=>{
        console.log("parser clicked")
        console.log("callbackVal", callbackVal)
        let tmpStack = this.tmpStack;
        let {result,updatedVal} = this.state
        let lastOperation;
        // debugger;
        if(typeof callbackVal === 'number') {
            if(!tmpStack.length){
                tmpStack.push(callbackVal);
                this.setState({result:callbackVal});
            }else{
                lastOperation = tmpStack.pop();
                if(typeof lastOperation === 'number'){
                    updatedVal = lastOperation * 10 + callbackVal;
                    tmpStack.push(updatedVal)
                    this.setState({result:updatedVal});
                }else{
                    switch (callbackVal){
                        case "+":
                            updatedVal = result + callbackVal;
                            break;
                        case "-":
                            updatedVal = result - callbackVal;
                            break;
                        case "x":
                            updatedVal = result * callbackVal;
                            break;
                        case '/':
                            updatedVal = result / callbackVal;
                            break;
                        case '+/-':
                            updatedVal = -result;
                            this.setState({result:updatedVal});
                            break;
                        case "=":
                            if(updatedVal !== result) this.setState({result:updatedVal});
                            break;
                        case "%":
                            updatedVal = 0.01 * result;
                            this.setState({result:updatedVal});
                            break;
                        case "AC":
                            updatedVal = 0;
                            this.setState({result:updatedVal})
                    }
                }
            }
        }else{
            if(!tmpStack){
                tmpStack.push(callbackVal)
            }else{
                tmpStack.pop();
                tmpStack.push(callbackVal)
            }
        }

    }


    text = ['AC',  '+/-', '%', '/', '7', '8','9', 'x','4','5','6','-','1','2','3','+','0','.','=']
    render(){
        const {result} = this.state
        const buttons = this.text.map((text,idx)=>{
            if (text !== '='){
                return (
                    <Button text={text} func={this.parseResult} key={idx}></Button>
                );
            }else{
                return (
                    <Button text={text} func={this.parseResult} className = "button" key={idx}></Button>
                );
            }

        })

        return (
            <div className="board">
                <div className="displayWindow">
                    <span>{result}</span>
                </div>
                {buttons}
            </div>

        )
    }
}


export default Calculator