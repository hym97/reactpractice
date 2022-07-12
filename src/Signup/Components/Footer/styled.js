import styled, {css, keyframes} from "styled-components";

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