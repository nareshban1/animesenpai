import styled from "styled-components";


export const FilterFormContainer = styled.form`
     background-color: ${(props) => props.theme.secondaryBackground};
    margin-bottom: 20px;
    padding: 10px;

`

export const TopGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 5px;
    margin-top:10px;
    margin-bottom: 5px;
    @media (max-width: 725px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 470px) {
        grid-template-columns: repeat(1,1fr);
    }


`
export const BottomGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 5px;
    @media (max-width: 725px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 470px) {
        grid-template-columns: repeat(1,1fr);
    }


`

export const Input = styled.input`
        background-color: ${(props) => props.theme.mainBackground};
        border:none;
        border-radius: 5px;
        color:white;
        padding: 8px;
        font-size: 1rem;
        width: auto;

        &:hover{
            border: 1px solid ${(props) => props.theme.primaryColor};
        }
`

export const Button = styled.button`
        background-color: ${(props) => props.theme.primaryColor};
        border:none;
        border-radius: 5px;
        color:white;
       
        font-size: 1rem;
        transition: 0.3s ease;

        &:hover{
            background-color:${(props) => props.theme.mainBackground};
        }

        @media (max-width: 470px) {
            padding: 10px;
    }
`