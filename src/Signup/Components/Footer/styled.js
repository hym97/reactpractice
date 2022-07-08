import styled from "styled-components";

export const FooterUl = styled.ul`
  width: 56px;
  height: 22.8px;
  color: #757575;
  padding: 6px 16px 6px 16px;
  
  li{
    text-align: center;
  }
`;

export const StyledDropBtn = styled.div.attrs(props => ({
    onClick: props.onClick,
    onBlur: props.onBlur
}))`
  width: px;
  height: 22.8px;
  color: #202124;
  padding: 6px 16px 6px 16px;
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
