import React from "react";
import {SelectionsPanel, StyledDropBtn} from "./styled";


export default class DropBtn extends React.Component{
    state={expand:false, clicked:Array(this.props.itemsArray.length + 1).fill(false)}
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

    expandDropBtn = (e, key) =>{
        console.log(key)
        let {clicked} = this.state
        clicked[key] = true
        this.setState({expand: true, clicked:clicked})
        console.log(this.state.clicked)
        e.nativeEvent.stopImmediatePropagation();
    }

    resetAnimation = (e,key) =>{
        console.log(key)
        let {clicked} = this.state
        clicked[key] = false
        this.setState({clicked:clicked})
    }
    render() {
        const {expand, clicked} = this.state
        const {itemsArray, ButtonText} = this.props
        const Items = itemsArray.map((val, idx) =>{
            return (
                <StyledDropBtn onClick={event => this.expandDropBtn(event, idx+1)}
                               key={idx+1} clicked = {clicked[idx+1]}
                               onAnimationEnd={event => this.resetAnimation(event, idx+1)}>
                    <div>
                        {val}
                    </div>
                </StyledDropBtn>
            )

        })

        return (
            <div style={{position:"relative"}}>
                <StyledDropBtn clicked = {clicked[0]}
                               onClick={event => this.expandDropBtn(event,0)} key={0}
                               onAnimationEnd={event => this.resetAnimation(event, 0)}>
                    <div className={"displayed"}>
                        {ButtonText}
                    </div>
                </StyledDropBtn>

                <SelectionsPanel expand={expand}>
                    {Items}
                </SelectionsPanel>
            </div>

        )
    }
}