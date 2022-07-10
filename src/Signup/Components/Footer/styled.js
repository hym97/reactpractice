import styled from "styled-components";

export const FooterUl = styled.ul`
  display: flex;
  width: 30%;
  height: 22.8px;
  color: #757575;
  padding: 6px 16px 6px 16px;
  justify-content: space-between;
  li{
    display: inline;
    text-align: center;
    list-style: none;
  }
`;

export const StyledDropBtn = styled.div.attrs(props => ({
    onClick: props.onClick,
    onBlur: props.onBlur
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 22.8px;
  color: #202124;
  padding: 6px 16px 6px 16px;
  line-height: 1.4;
   .displayed::after{
     display: inline-block;
    content:"";
      width: 0px;
     margin-left: 16px;
      height: 10px;
      border: 4px solid;
      border-color:  #666 transparent transparent transparent;
     transform: translateY(50%);
    
  }
`

export const SelectionsPanel = styled.div`
  display: ${props => props.expand ? "block" : "none"};
  background-color: white;
  position: relative;
  top:-50px;
  color:#202124;
  z-index: 1;
  
  
  
  & > ${StyledDropBtn}:hover{
    background-color: #eee
  }
`
export const FooterPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:80%;
  margin: 24px auto;
  font-size: 12px;

`;