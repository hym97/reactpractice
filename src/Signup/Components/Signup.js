import React from "react";
import Input from "./Input";
import Footer from "./Footer/Footer";

// const StyledInput = styled.input.attrs({type:"text"})``;
export default class Signup extends React.Component{
    render() {
        const li = [{text:"Help", href:"www.google.com"},
            {text:"Privacy", href:"www.google.com"},
            {text:"Terms", href:"www.google.com"},];

        const DropBtnObjs = {ButtonText:"English (United States)",itemsArray:["简体中文", "English (United Kingdom)", "中文（香港）"]}
        return (
<form>
    <Input type={'text'} placeholder={'hello world'} />
    <Input type={'text'} placeholder={'1234'} />
    <Footer objs={li} DropBtnObjs={DropBtnObjs}></Footer>
</form>




        )
    }
}