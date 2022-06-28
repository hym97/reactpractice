import React from "react";

class Button extends React.Component{

    hasNumber = (myString) => {
        return /\d/.test(myString);
    }

    return_data = () => {
        console.log("clicked")
        const {text,func} = this.props
        if(this.hasNumber(text)){
            func(parseInt(text));
        }else{
            func(text)
        }
    }

    render() {
        const {text, className} = this.props
        return (
            <div onClick={this.return_data} className={className}>
                <span>{text}</span>
            </div>
        )
    }
}

export default Button