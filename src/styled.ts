import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{

    .react-modal-overlay{
background: rgba(0 , 0, 0, 0.5);

position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;

display: flex;
align-items: center;
justify-content: center;
}

.react-modal-content{
width: 100%;
margin-bottom: 10rem;
max-width: 300px;
background: #FFF;
padding: 6rem;
position: relative;
border-radius: 0.24rem;
}

.react-modal-close {
position: absolute;
right: 1.5rem;
top: 1.5rem;
border: 0;
background: transparent;

transition: filtro 0.2s;

&:hover{
    cursor: pointer;
    filter: brightness(0.8);
}
}
}`;
