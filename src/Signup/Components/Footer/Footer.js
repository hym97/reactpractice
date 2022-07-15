import React from "react";
import DropBtn from "./DropBtn";
import styled from "styled-components";
import {FooterLi, FooterPanel, FooterUl} from "../styled";




export default class Footer extends React.Component{
    state = {clicked:Array(this.props.objs.length).fill(false)}
    // array = ["简体中文", "English (United Kingdom)", "中文（香港）"]
    // text= "English (United States)"
    changeLinkStyle = (event, key) =>{
        let {clicked} = this.state
        clicked[key] = true
        this.setState({clicked: clicked})
    }

    resetAnimation = (e,key) =>{
        console.log(key)
        let {clicked} = this.state
        clicked[key] = false
        this.setState({clicked:clicked})
    }

    delayedOpen = (e,href, delay) =>{
        setTimeout(() =>{
            window.open(href)
            },delay
        )
    }
    render() {
        const {clicked} = this.state
        const {objs, DropBtnObjs} = this.props
        const allButtons = objs.map(({text,href}, idx)  => {
        return (
            <FooterLi key={idx}
                      onClick={event => this.changeLinkStyle(event, idx)}
                      clicked={clicked[idx]}
                      onAnimationEnd={event => this.resetAnimation(event, idx)}>
                <a onClick={event => this.delayedOpen(event, href, 500)}>{text}</a>
            </FooterLi>
        )
    })
        return (
            <FooterPanel>
                <DropBtn itemsArray={DropBtnObjs.itemsArray} ButtonText = {DropBtnObjs.ButtonText}></DropBtn>
                <FooterUl clicked={clicked}>
                    {allButtons}
                </FooterUl>
            </FooterPanel>
        );
    }
}