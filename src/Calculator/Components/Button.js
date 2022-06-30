import React from "react";
import "./button.css"
import {hasNum} from "../Logic/helper";
class Button extends React.Component{


    return_data = () => {
        const {text, func} = this.props
        func(text)
    }


    render() {
        const {text, className} = this.props

        const classActive = [className, hasNum(text) || text === "." ? "numButton" : "operationButton"].join(" ")
        return (
            <div onClick={this.return_data} className={classActive}>
                <span>{text}</span>
            </div>
        )
    }
}

export default Button