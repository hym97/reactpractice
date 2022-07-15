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
                <div>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}/>
                    <div>
                        <span>Create your Google Account</span>
                    </div>

                </div>
            <SignupPanel>
                <div>
                    <SignupForm>
                        <Input type={'text'} placeholder={'First name'} grid={"a"}/>
                        <Input type={'text'} placeholder={'Last name'} gird={"b"}/>
                        <Input type={'text'} placeholder={"Username"} grid={"c"}/>
                        <TextField grid={"d"}>
                            <span>You can use letters, numbers & periods</span>
                        </TextField>
                        <LinkField grid={"e"}>
                            <a>Use my current email address instead</a>
                        </LinkField>

                        <Input type={'password'} placeholder = {"Password"} grid={"f"}/>
                        <Input type={"password"} placeholder={"Confirm"} grid={"g"}/>
                        <TextField grid={"h"}>
                            <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                        </TextField>

                        <div style={{gridArea:"i"}}>
                            <input type={"checkbox"}/><label>Show password</label>
                        </div>


                        <LinkField grid={"j"}>
                            <a>Sign in instead</a>
                        </LinkField>

                        <button style={{gridArea:"k"}}>Next</button>
                    </SignupForm>
                </div>

                <ImgField>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}/>
                </ImgField>
            </SignupPanel>
        <Footer objs={li} DropBtnObjs={DropBtnObjs}></Footer>
            </>




    )
    }
}