import React from "react";
import Input from "./Input";
import Footer from "./Footer/Footer";

// const StyledInput = styled.input.attrs({type:"text"})``;
export default class Signup extends React.Component{
    render() {
        const li = [1,2]
        return (
<form>
    <Input type={'text'} placeholder={'hello world'} />
    <Input type={'text'} placeholder={'1234'} />
    <Footer text={li}></Footer>
</form>




        )
    }
}