import React from "react";
import {SelectionsPanel, StyledDropBtn} from "./styled";

// const DropTable = styled.div`
// display: ${props => props.expand ? "block" : "none"};
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   padding: 12px 16px;
//   z-index: 1
//
// `;

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
        const {itemsArray, type} = this.props
        const Items = itemsArray.map((val, idx) =>{
            return (
                <StyledDropBtn key={idx}>{val}</StyledDropBtn>
            )

        })

        return (
            <div>
                <StyledDropBtn onClick={this.expandDropBtn}>13564</StyledDropBtn>
                <SelectionsPanel expand={expand}>
                    {Items}
                </SelectionsPanel>
            </div>

        )
    }
}