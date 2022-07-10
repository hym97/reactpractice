import React from "react";
import {SelectionsPanel, StyledDropBtn} from "./styled";


export default class DropBtn extends React.Component{
    state={expand:false}
    componentDidMount() {
        document.onclick = this.hidePanel
    }

    componentWillUnmount() {
        document.onclick = null
    }

    hidePanel = () =>{
        const {expand} = this.state
        if(expand === true) this.setState({expand: false})
    }

    expandDropBtn = (e) =>{
        console.log("clicked")
        this.setState({expand: true})
        e.nativeEvent.stopImmediatePropagation();

    }
    render() {
        const {expand} = this.state
        const {itemsArray} = this.props
        const Items = itemsArray.map((val, idx) =>{
            return (
                <StyledDropBtn key={idx}>{val}</StyledDropBtn>
            )

        })

        return (
            <div>
                <StyledDropBtn onClick={this.expandDropBtn}><div className={"displayed"}>
                    12345
                </div> </StyledDropBtn>
                <SelectionsPanel expand={expand}>
                    {Items}
                </SelectionsPanel>
            </div>

        )
    }
}