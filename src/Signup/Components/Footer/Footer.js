import React from "react";
import DropBtn from "./DropBtn";
import styled from "styled-components";
import {FooterPanel, FooterUl} from "./styled";




export default class Footer extends React.Component{
    array = [1,2,3];

    render() {
        const {text} = this.props
        const allButtons = text.map((text,idx)  => {
        return (
            <li key={idx}>{text}</li>
        )
    })
        return (
            <FooterPanel>
                <DropBtn itemsArray={this.array}></DropBtn>
                <FooterUl>
                    {allButtons}
                </FooterUl>
            </FooterPanel>
        );
    }
}