import styled from "styled-components";

const StyledApp = styled.div`
margin: 20px;
`
const StyledHeader = styled.div`
display: 'flex';
flex-direction: 'row';
`
const StyledLogoutButton = styled.button`
padding: 10px 20px;
margin-left: 1520px;
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
    StyledApp,
    StyledHeader,
    StyledLogoutButton,
  };