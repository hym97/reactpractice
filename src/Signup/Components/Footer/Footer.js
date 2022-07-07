import React from "react";
import DropBtn from "./DropBtn";
import styled from "styled-components";

const StyledDiv = styled.div`
 display: grid;
  grid-template-columns: 70% 15% 15%;
  

`
export default class Footer extends React.Component{
    array = [1,2,3]
    render() {
        return (
            <StyledDiv>
                <DropBtn type={"button"} itemsArray={this.array}></DropBtn>
                <button type={'button'}>1</button>
                <button type={'button'}>2</button>
            </StyledDiv>
        );
    }
}