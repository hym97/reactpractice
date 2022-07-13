import React from "react";
import Input from "./Input/Input";
import Footer from "./Footer/Footer";
import {ImgField, LinkField, SignupForm, SignupPanel, TextField} from "./styled";

// const StyledInput = styled.input.attrs({type:"text"})``;
export default class Signup extends React.Component{
    render() {
        const li = [{text:"Help", href:"www.google.com"},
            {text:"Privacy", href:"www.google.com"},
            {text:"Terms", href:"www.google.com"},];

        const DropBtnObjs = {ButtonText:"English (United States)",itemsArray:["简体中文", "English (United Kingdom)", "中文（香港）"]}
        return (
            <>
            <SignupPanel>
                <SignupForm>
                    {/*<Input type={'text'} placeholder={'First name'} />*/}
                    {/*<Input type={'text'} placeholder={'Last name'} />*/}
                    {/*<Input type={'text'} placeholder={"Username"}/>*/}
                    <TextField>
                        <span>You can use letters, numbers & periods</span>
                    </TextField>
                    <LinkField>
                        <a>Use my current email address instead</a>
                    </LinkField>

                    {/*<Input type={'password'} placeholder = {"Password"}/>*/}
                    {/*<Input type={"password"} placeholder={"Confirm"}/>*/}
                    <TextField>
                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                    </TextField>

                    <input type={"checkbox"}/><label>Show password</label>

                    <LinkField>
                        <a>Sign in instead</a>
                    </LinkField>

                    <button>Next</button>
                </SignupForm>
                <ImgField>

                </ImgField>
            </SignupPanel>
        <Footer objs={li} DropBtnObjs={DropBtnObjs}></Footer>
            </>




    )
    }
}