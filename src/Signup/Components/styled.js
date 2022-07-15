import styled, {css, keyframes} from "styled-components";


export const SignupPanel = styled.div`
  width: 80%;
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
    `;

export const SignupForm = styled.form`
  width: 55%;
  display: grid;
  column-gap: 5%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(8,12.5%);
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
`;

export const TextField = styled.div`
  font-size: 14px;
  grid-area: ${props => props.grid};
`
export const LinkField = styled.div`
  font-size: 16px;
  grid-area: ${props => props.grid};
`
export const StyledInputs = styled.div`
  position: relative;
  grid-area: ${props => props.grid};
  font-size: 15px;
  color:#202124;
  label{
    
    position: absolute;
    left: 8px;
    transform:translateY(50%);
    text-align: center;
    padding: 0px 2px 2px 0px;
  }

  input{
   //width: calc(100% - 16px);;
    //overflow: hidden;
    outline: rgb(241, 241, 241) solid;
    border: none;
    padding: 8px;
    border-radius: 4px;
  
  }
  
  input:focus{
    outline-color: #4285F4;
  }
  
  input:focus + label{
    transform: translateY(-1em) scale(0.75);
    transform-origin: -5%;
    transition: 0.25s ease-in-out;
    color: #4285F4;
    background-color: white;
  }
  
  input:not(:placeholder-shown) + label{
    transform: translateY(-1em);
    z-index: 1;
    
  }

`;

const transformColor = keyframes`
  from  {background-color: #d2d2d2;}
  to { background-color: #f1f1f1}
`


export const FooterUl = styled.ul`
  display: flex;
  width: 30%;
  height: 22.8px;
  color: #757575;
  padding: 6px 16px 6px 16px;
  justify-content: space-between;
  
  li a{
    text-decoration: none;
    
    
    ${props => props.clicked && css`
      animation: ${transformColor} linear 0.1s;
    `}
  }
`;

export const FooterLi = styled.li`
  display: inline-block;
    text-decoration: none;
    padding: 6px 16px 6px 16px;
    text-align: center;
    width: 56px;
    list-style: none;
  font-weight: 500;
  cursor: pointer;
    ${props => props.clicked && css`
      animation: ${transformColor} linear 0.1s;
    `}
`;

export const StyledDropBtn = styled.div.attrs(props => ({
    onClick: props.onClick,
    onAnimationEnd:props.onAnimationEnd
}))`
  cursor: pointer;
  display: flex;
  //justify-content: center;
  //align-items: center;
  width: 160px;
  height: 22.8px;
  color: #202124;
  padding: 6px 16px 6px 16px;
  line-height: 1.4;
  z-index: 0;
  
  ${props => props.clicked && css`
    animation: ${transformColor} linear;
    animation-duration: 0.1s;
    
  `};

  
   .displayed::after{
     display: inline-block;
    content:"";
      width: 0px;
     margin-left: 16px;
      height: 10px;
      border: 4px solid;
      border-color:  #666 transparent transparent transparent;
     transform: translateY(55%);
    
  }
`

export const SelectionsPanel = styled.div`
  
  visibility: hidden;

  background-color: white;
  position: absolute;
  top:-50px;
  color:#202124;
  z-index: -1;
  box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);
  transition: all .25s linear;
  transition-delay: .1s;
  ${props => props.expand && css`
    visibility: visible;
    display: block;
    z-index: 10000;
    `
};
  
  
  & > ${StyledDropBtn}:hover{
    background-color: #eee
  }
`

export const FooterPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:60%;
  margin: 24px auto;
  font-size: 12px;

`;