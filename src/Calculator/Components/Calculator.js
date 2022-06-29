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
        let {result, updatedVal} = this.state

        let lastOperation;
        // debugger;
        if(typeof callbackVal === 'number') {
            if(!tmpStack.length){
                tmpStack.push(callbackVal);
                this.setState({result:callbackVal});

                this.setState({updatedVal: callbackVal})
            }else{
                lastOperation = tmpStack.pop();
                if(typeof lastOperation === 'number'){
                    updatedVal = lastOperation * 10 + callbackVal;
                    tmpStack.push(updatedVal)


                    this.setState({result:updatedVal});
                    this.setState({updatedVal: updatedVal})
                }else{
                    this.setState({result: callbackVal})
                    switch (lastOperation){
                        case "+":
                            updatedVal = result + callbackVal;
                            console.log(updatedVal)
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
                        // case '+/-':
                        //     updatedVal = -result;
                        //     this.setState({result:updatedVal});
                        //     break;
                        // case "=":
                        //     if(updatedVal !== result) this.setState({result:updatedVal});
                        //     break;
                        // case "%":
                        //     updatedVal = 0.01 * result;
                        //     this.setState({result:updatedVal});
                        //     break;
                        // case "AC":
                        //     updatedVal = 0;
                        //     this.setState({result:updatedVal})
                    }
                    this.setState({updatedVal:updatedVal})
                }
            }
        }else{
            if(callbackVal === "="){
                console.log(updatedVal)
                this.setState({result:updatedVal});
            }else if(callbackVal === '+/-'){
                updatedVal = -result;
                this.setState({result:updatedVal});
            }else if(callbackVal === '%'){
                updatedVal = 0.01 * result;
                this.setState({result:updatedVal});
            }else if(callbackVal === "AC"){
                updatedVal = 0;
                tmpStack.length = 0

                this.setState({result:updatedVal});
                this.setState({updatedVal: updatedVal})
            }else{
                if(!tmpStack.length){
                    tmpStack.push(callbackVal)
                }else{
                    tmpStack.pop()
                    tmpStack.push(callbackVal)
                }
            }
        }

    }


    text = ['AC',  '+/-', '%', '/', '7', '8','9', 'x','4','5','6','-','1','2','3','+','0','.','=']
    render(){
        const {result} = this.state
        const buttons = this.text.map((text,idx)=>{
            if (text !== '0'){
                return (
                    <Button text={text} func={this.parseResult}  key={idx}></Button>
                );
            }else{
                return (
                    <Button text={text} func={this.parseResult} className = "zero" key={idx}></Button>
                );
            }

        })

        return (
            <div className="board">
                <div className="displayWindow">
                    <span style={{paddingRight:"20px"}}>{result}</span>
                </div>
                {buttons}
            </div>

        )
    }
}


export default Calculator