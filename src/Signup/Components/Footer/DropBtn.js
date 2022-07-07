import React from "react";
import styled from "styled-components";

const DropTable = styled.div`
display: ${props => props.expand ? "block" : "none"};
  position: relative;
  left: 0

`;

export default class DropBtn extends React.Component{
    state={expand:false}
    expandSelections = ()=>{
        const {expand} = this.state
        if (!expand) this.setState({expand:true})

    }

    render() {
        const {expand} = this.state
        const {itemsArray, type} = this.props
        const Items = itemsArray.map((val, idx) =>{
            return (
                <div key={idx}>{val}</div>
            )

        })
        return (
            <div>
                <button type={type} onFocus={()=>this.setState({expand: true})} onBlur={()=>this.setState({expand: false})}>13564
                </button>

                <DropTable expand={expand}>
                    {Items}
                </DropTable>
            </div>

        )
    }
}