import React from "react";
import styled from "styled-components";


const StyledInputs = styled.input.attrs(props =>({
    type:props.type,
    placeholder:props.placeholder
}))`
    label{
      position: absolute;
      left: 0;
    }
  
   label:focus{
     transform: translateY(-1em);
     
  }
`;


export default class Input extends React.Component{

    render(){
        const {type, placeholder} = this.props
        return (
            <StyledInputs type={type} placeholder={''}>
                <label>{placeholder}</label>

        )
    }

}
