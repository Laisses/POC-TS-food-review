import { useState } from "react";
import styled from "styled-components";
import { BLACK } from "../constants/constants";
import { RatingButton } from "./RatingButton";

export const RatingForm = ({id}) => {
    const [display, SetDisplay] = useState(false);

    const sendReview = review => {
        console.log(`envou a nota ${review} no id ${id}`);
    };

    return (
        <DropDown onClick={() => SetDisplay(!display)}>
            <RatingButton />
            <DropDownContent visibleForm={display}>
                <Options
                    onClick={() => sendReview("terrible")}>
                    Never again
                </Options>
                <Options
                    onClick={() => sendReview("bad")}>
                    No
                </Options>
                <Options onClick={() => sendReview("ok")}>
                    Meh
                </Options>
                <Options onClick={() => sendReview("good")}>
                    I like it
                </Options>
                <Options onClick={() => sendReview("great")}>
                    LOVE it
                </Options>
            </DropDownContent>
        </DropDown>
    );
};

const DropDown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropDownContent = styled.div`
    display: ${props => props.visibleForm ? "block" : "none"};
    position: absolute;
    background-color: #f9f9f9;
    max-width: 7rem;
    z-index: 1;
`;

const Options = styled.p`
    color: ${BLACK};
    padding: 10px 10px;
    text-decoration: none;
    display: block;
    &:hover {
        background-color: #f1f1f1;
    }
`;