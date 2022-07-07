import React from "react";
import Input from "./Input";
import Footer from "./Footer/Footer";

// const StyledInput = styled.input.attrs({type:"text"})``;
export default class Signup extends React.Component{
    render() {
        return (
<form>
    <Input type={'text'} placeholder={'hello world'} />
    <Input type={'text'} placeholder={'1234'} />
    <Footer></Footer>
</form>




        )
    }
}