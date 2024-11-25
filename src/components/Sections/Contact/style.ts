import styled from "styled-components";

export const ContactDiv = styled.div`
    background-color: #E12773;
    border-radius: 7px;
    padding: 20px;
`

export const StyledInput = styled.input`
    width: 48%;
    margin: 5px;
    height: 40px;
    padding: 5px 10px;
    border: none;
    border-radius: 3.5px;
    outline: none;

    &:focus {
        border: 1px solid #4A4A4A;
    }
`

export const StyledTextField = styled.textarea`
    resize: none; /* Desativa o redimensionamento */
    height: 300px;
    width: 98%;
    margin: 20px 0 0 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 3.5px;
    outline: none;

    &:focus {
        border: 1px solid #4A4A4A;
    }

`

export const Socials = styled.div`
    background-color: white;
    padding: 100px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const SocialCard = styled.div`
    display: flex;
    margin-top: 30px;
`
export const SocialInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`

export const FormButton = styled.button`
    padding: 15px 30px;
    background-color: white;
    color: #E12773;
    border: none;
    font-weight: 500;
    border-radius: 7px;
    cursor: pointer;
    margin-left: 5px;
    margin-top: 10px;
    transition: all 200ms ease;
    font-family: 'Josefin Sans';


    &:hover {
        transform: scale(1.05);
        filter: brightness(0.93);
    }
`