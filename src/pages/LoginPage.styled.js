import styled from "styled-components";


const StyledLoginPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

const StyledLoginLabel = styled.h2`
padding-bottom: 40px;
font-size: 20;
color: #fff;
text-transform: uppercase;
`

const StyledLoginBox = styled.div`
display: flex;
flex-direction: column;
padding: 40px;
background-color: #333333;
width: 400px;
height: 460px;
border-radius: 10px;
align-items: center;
justify-content: center;
`

const StyledLoginBoxInput = styled.input`
padding: 10px 0;
width: 100%;
font-size: 16px;
color: #fff;
margin-bottom: 40px;
border: none;
border-bottom: 1px solid #fff;
outline: none;
background: transparent;

::placeholder {
    color: #fff;
}
`

const StyledLoginButton = styled.button`
padding: 10px 20px;
margin-top: 18px;
color: #fff;
background-color: #333333;
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
transition: 0.5s;
letter-spacing: 4px;
border: 1px solid #8f7cec;

&:hover {
    background: #8f7cec;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8f7cec, 0 0 10px #8f7cec, 0 0 15px #8f7cec, 0 0 30px #8f7cec;
  }
`

export {
    StyledLoginPage,
    StyledLoginLabel,
    StyledLoginBox,
    StyledLoginBoxInput,
    StyledLoginButton,
  };