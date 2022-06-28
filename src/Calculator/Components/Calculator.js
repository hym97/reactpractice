import React from "react";
import Button from "./Button";

class Calculator extends React.Component{
    state = {result:0, updatedVal:0};
    tmpStack = [];
    parseResult = (callbackVal)=>{
        let tmpStack = this.tmpStack;
        let {result,updatedVal} = this.state
        let lastOperation;
        if(typeof callbackVal === 'number') {
            if(!tmpStack){
                tmpStack.push(callbackVal);
                this.setState({result:callbackVal});
            }else{
                lastOperation = tmpStack.pop();
                if(typeof lastOperation === 'number'){
                    updatedVal = lastOperation * 10 + callbackVal;
                    this.setState({result:updatedVal});
                }else{
                    switch (callbackVal){
                        case "+":
                            updatedVal = result + callbackVal;
                            break;
                        case "-":
                            updatedVal = result - callbackVal;
                            break;
                        case "*":
                            updatedVal = result * callbackVal;
                            break;
                        case '/':
                            updatedVal = result / callbackVal;
                            break;
                        case '+/-':
                            updatedVal = -result
                            break;
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
        const buttons = this.text.map((text)=>{
            <Button text={text}></Button>
        })

        return (
            <div>
                <span>{result}</span>
                {buttons}
            </div>

        )
    }
}