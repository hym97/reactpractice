import styled from "styled-components";


export const SignupPanel = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;    
    `;

export const SignupForm = styled.form`
  width: 55%;
  display: grid;
  grid-template: 
          "a b"
          "c c"
          "d d"
          "e e"
          "f g"
          "h h"
          "i i"
          "j j"
          ". . "
          "k l";

    `;

export const ImgField = styled.div`
    width: 35%;
  display: inline-block;
  grid-area: ${props=>props.areas};
`;

export const TextField = styled.div`
display: block;
`
export const LinkField = styled.div`
display: block;
`
