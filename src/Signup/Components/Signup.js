import React from "react";
import styled from "styled-components";
import Input from "./Input";

// const StyledInput = styled.input.attrs({type:"text"})``;
export default class Signup extends React.Component{
    render() {
        return (

            <Input type={'text'} placeholder={'hello world'}/>


        )
    }
}