import React from "react";
import Input from "./Input/Input";
import Footer from "./Footer/Footer";
import {
    EvenDivideDiv,
    ImgField,
    LinkField,
    SignupForm,
    SignupPanel,
    SignupSection,
    SignupSectionMain,
    TextField
} from "./styled";

// const StyledInput = styled.input.attrs({type:"text"})``;
export default class Signup extends React.Component{
    state={firstName:"", lastName:"", userName:"", password:"", confirmation:""}

    onInputChange = (tgtIdx, currVal)=> {
        console.log("prtfuncCalled")
        let tgtName;
        switch (tgtIdx){
            case 0: tgtName = "firstName"; break;
            case 1: tgtName = "lastName"; break;
            case 2: tgtName = "userName"; break;
            case 3: tgtName = "password"; break;
            case 4: tgtName = "confirmation"; break;
            default: tgtName = ""; break;
        }
        console.log(tgtName,currVal)
        this.setState({[tgtName]:currVal})
    }
    render() {
        const li = [{text:"Help", href:"www.google.com"},
            {text:"Privacy", href:"www.google.com"},
            {text:"Terms", href:"www.google.com"},];
        const {firstName, lastName, userName, password, confirmation} = this.state
        console.log(userName)
        const DropBtnObjs = {ButtonText:"English (United States)",itemsArray:["简体中文", "English (United Kingdom)", "中文（香港）"]}
        return (
            <>
            <SignupPanel>
                <SignupSectionMain>
                    <div>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}/>
                        <div>
                            <span>Create your Google Account</span>
                        </div>
                    </div>
                    <SignupSection height={"85%"}>
                        <SignupForm>
                            <SignupSection height={"40%"} spaceBetween={false}>
                                <EvenDivideDiv>
                                    <Input type={'text'} placeholder={'First name'}
                                           prtCallBack={this.onInputChange} value={firstName} idx={0}/>
                                    <Input type={'text'} placeholder={'Last name'}
                                           prtCallBack={this.onInputChange} value={lastName} idx={1}/>
                                </EvenDivideDiv>
                                <div>
                                    <Input type={'text'} placeholder={"Username"}
                                           prtCallBack={this.onInputChange} value={userName} idx={2} emailtext={"@gmail.com"} />
                                    <TextField>
                                        <span>You can use letters, numbers & periods</span>
                                    </TextField>
                                    <LinkField color={'#1a73e8'} fontWeight={500}>
                                        <a>Use my current email address instead</a>
                                    </LinkField>
                                </div>

                            </SignupSection>

                            <SignupSection height={"40%"}>
                                <div>
                                    <EvenDivideDiv>
                                        <Input type={'password'} placeholder = {"Password"}
                                               prtCallBack={this.onInputChange} value={password} idx={3}/>

                                        <Input type={"password"} placeholder={"Confirm"}
                                               prtCallBack={this.onInputChange} value={confirmation} idx={4}/>
                                    </EvenDivideDiv>

                                    <TextField grid={"h"}>
                                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                                    </TextField>

                                    <div>
                                        <input type={"checkbox"}/><label>Show password</label>
                                    </div>
                                </div>

                            </SignupSection>

                            <EvenDivideDiv>
                                <LinkField color={'#1a73e8'} fontWeight={500}>
                                    <a>Sign in instead</a>
                                </LinkField>

                                <button style={{gridArea:"k"}}>Next</button>
                            </EvenDivideDiv>

                        </SignupForm>
                    </SignupSection>


                </SignupSectionMain>

                <ImgField>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}/>
                </ImgField>
            </SignupPanel>
        <Footer objs={li} DropBtnObjs={DropBtnObjs}></Footer>
            </>




    )
    }
}