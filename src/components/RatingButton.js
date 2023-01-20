import styled from "styled-components";
import { YELLOW } from "../constants/constants";

export const RatingButton = () => {
    return (
        <Button>Review</Button>
    );
};

const Button = styled.button`
    width: 5rem;
    height: 20px;
    color: #fcfcfc;
    background-color: ${YELLOW};
    border: none;
    border-radius: 3px;
    &:active {
        background-color: #edb202;
    }
`;