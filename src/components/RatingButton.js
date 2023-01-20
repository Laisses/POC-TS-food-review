import styled from "styled-components";
import { DARK_GREY } from "../constants/constants";

export const RatingButton = () => {
    return (
        <Button>Review</Button>
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
        background-color: #b5bdc4;
    }
`;