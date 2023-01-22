import styled from "styled-components";
import { DARK_GREY } from "../constants/constants";

export const RatingButton = ({text, status}) => {
    return (
        <Button disabled={status}>{text}</Button>
    );
};

const Button = styled.button`
    width: 7rem;
    height: 30px;
    font-size: 1rem;
    color: #fcfcfc;
    background-color: ${DARK_GREY};
    border: none;
    border-radius: 10px;
    &:active {
        background-color: ${props => props.status ? "#b5bdc4" : DARK_GREY}
    }
`;