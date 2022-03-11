import styled from 'styled-components'

export const Container =styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center; 

    .image{
        margin-right: 5px;
    }

    input{
        border: 0px;
        background: transparent;
        outline: 0;
        color:  #fff;
        font-size: 18px;
        flex: 1;
    }

    button{
      color: white;
      background: #006800;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
  
      transition: filter 0.2s;
  
      &:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
`;