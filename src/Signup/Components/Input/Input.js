import React from "react";
import {StyledInputs} from "./styled";
// const StyledInputs = styled.div`
//   &{
//     display: inline-block;
//   }
//   label{
//     position: absolute;
//     left: 0;
//   }
//
//   input{
//     outline: rgb(241, 241, 241) solid;
//     border: none;
//     padding: 8px;
//   }
//
//   input:focus{
//     outline-color: #4285F4;
//   }
//
//   input:focus + label{
//     transform: translateY(-1em) scale(0.75);
//     transform-origin: left;
//     transition: 0.25s ease-in-out;
//     color: #4285F4;
//     background-color: white;
//   }
//
//   input:not(:placeholder-shown) + label{
//     transform: translateY(-1em);
//     z-index: 1;
//   }
//
// `;

// const StyledInputs = styled.input.attrs(props =>({
//     type:props.type,
//     placeholder:props.placeholder
// }))`
//     label{
//       position: absolute;
//       left: 0;
//     }
//
//    label:focus{
//      transform: translateY(-1em);
//
//   }
// `;


export default class Input extends React.Component{

    render(){
        const {type, placeholder} = this.props
        return (

            <StyledInputs>
            <input type={type} placeholder={" "}/><label>{placeholder}</label>
            </StyledInputs>
        )
    }

}
