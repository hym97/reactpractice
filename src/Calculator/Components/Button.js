import React from "react";

class Button extends React.Component{

    hasNumber = (myString) => {
        return /\d/.test(myString);
    }

    return_data = () => {
        const {text,func} = this.props
        if(this.hasNumber(text)){
            func(parseInt(text));
        }else{
            func(text)
        }
    }

    render() {
        const {text} = this.props
        return (
            <div onClick={this.return_data}>
                <span>{text}</span>
            </div>
        )
    }
}

export default Button