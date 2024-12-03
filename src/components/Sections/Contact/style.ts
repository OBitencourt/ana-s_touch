import styled from "styled-components";

export const ContactDiv = styled.div`
    background-color: #E12773;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;

    padding: 20px;
`

export const StyledInput = styled.input`
    width: 98%;
    margin-bottom: 8px;
    height: 40px;
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    outline: none;

    &:focus {
        border: 1px solid #4A4A4A;
    }
`

export const StyledTextField = styled.textarea`
    resize: none; /* Desativa o redimensionamento */
    min-height: 164px;
    width: 98%;
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    border-bottom-right-radius: 8px;
    outline: none;

    &:focus {
        border: 1px solid #4A4A4A;
    }

`

export const Socials = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 28px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 10;
    top: 37%;
    border: 8px solid #E12773;
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
    padding: 10px 14px;
    background-color: white;
    color: #E12773;
    border: none;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 200ms ease;
    font-family: 'Josefin Sans';
    font-size: 12px;


    &:hover {
        transform: scale(1.05);
        filter: brightness(0.93);
    }
`

export const PhotoDiv = styled.div`
    
    height: 474px;
    background-image: url('/images/contact-page-photo.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    position: relative; /* Necessário para o ::before funcionar */

    
`;