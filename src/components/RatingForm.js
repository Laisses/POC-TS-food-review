import { useState } from "react";
import styled from "styled-components";
import { BLACK } from "../constants/constants";
import { RatingButton } from "./RatingButton";

export const RatingForm = () => {
    const [display, SetDisplay] = useState(false);
    return (
        <DropDown onClick={() => SetDisplay(!display)}>
            <RatingButton />
            <DropDownContent visibleForm={display}>
                <Options>Never again</Options>
                <Options>No</Options>
                <Options>Meh</Options>
                <Options>I like it</Options>
                <Options>LOVE it</Options>
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