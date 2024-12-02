import styled from "styled-components";

export const BackButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ff4081;
    color: #fff;
    z-index: 1000;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out, background-color 0.3s ease-in-out;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #ff6295;
        transform: scale(1.05);
    }

`