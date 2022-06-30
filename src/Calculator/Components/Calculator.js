import React from "react";
import Button from "./Button";
import "./calculator.css";
import {hasNum} from "../Logic/helper";
class Calculator extends React.Component{
    state = {result:0, updatedVal:0};
    numStack = ['0'];
    operationStack = [];
    numFlg = 1;
    parseResult = (callbackVal)=>{
        const initState = (strs) => {
            let numStack = this.numStack
            let opStack = this.operationStack
            numStack.length = 0
            numStack.push(strs)
            opStack.length =0
            this.numFlg = 1;
            this.setState({result:numStack[numStack.length-1]})
            return null
        }

        let numStack= this.numStack;
        let opStack = this.operationStack
        if(hasNum(callbackVal)){
            if(!numStack.length || this.numFlg === 0){
                numStack.push(callbackVal)
                this.numFlg = 1
            }else if(this.numFlg === 1){
                let lastDigit = numStack.pop()
                numStack.push(lastDigit === "0" ? callbackVal : lastDigit + callbackVal)
            }else if(this.numFlg === 2){
                initState(callbackVal)
            }
            this.setState({result:numStack[numStack.length-1]})
        }else if(callbackVal === "AC"){
            initState("0");
        }else if(callbackVal === "%"){
            let curr_num = numStack.pop();
            curr_num = (Number(curr_num) / 100).toPrecision(curr_num.length);
            numStack.push(String(curr_num));
            this.numFlg = 0;
            this.setState({result:numStack[numStack.length-1]});
        }else if(callbackVal === "=") {
            if (opStack.length && numStack.length >= 2) {
                let str1 = numStack.pop(), str2 = numStack.pop();
                let result = 0;
                switch (opStack.pop()) {
                    case "+":
                        result = Number(str1) + Number(str2);
                        break;
                    case "-":
                        result = Number(str2) - Number(str1);
                        break;
                    case "x":
                        result = Number(str1) * Number(str2);
                        break;
                    case "/":
                        result = str1 === '0' ? "Cannot divide by zero": result = Number(str2) / Number(str1);
                        break;
                }
                numStack.push(String(result));
                this.setState({result: numStack[numStack.length - 1]});
                this.numFlg = 2;
            }
        }else if (callbackVal === ".") {
            if(this.numFlg === 2){
                initState("0");
            }
                let currStrs = numStack.pop();
                numStack.push(currStrs + ".");
                this.setState({result: numStack[numStack.length - 1]});
        }else if (callbackVal === "+/-"){
            let currStrs = numStack.pop();
            numStack.push("-" + currStrs);
            this.setState({result: numStack[numStack.length - 1]});
        }else{
            if(!opStack.length) {
                opStack.push(callbackVal);
            }else{
                opStack.length = 0;
                opStack.push(callbackVal);
            }
            this.numFlg = 0;
            }
        }

    text = ['AC',  '+/-', '%', '/', '7', '8','9', 'x','4','5','6','-','1','2','3','+','0','.','='];
    render(){
        const {result} = this.state;
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

        });

        return (
            <div className="board">
                <div className="displayWindow">
                    <span style={{paddingRight:"20px"}}>{result}</span>
                </div>
                {buttons}
            </div>

        );
    }
}


export default Calculator;