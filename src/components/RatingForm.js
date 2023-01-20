import { useState } from "react";
import styled from "styled-components";
import { BLACK } from "../constants/constants";
import { RatingButton } from "./RatingButton";

export const RatingForm = () => {
    const [display, SetDisplay] = useState("none");
    return (
        <DropDown >
            <RatingButton />
            <DropDownContent visibility={display}>
                <Options>Never again!</Options>
                <Options>If that's the only one left... Maybe!</Options>
                <Options>Meh!</Options>
                <Options>I like it!</Options>
                <Options>The beginning of a beautiful love story</Options>
            </DropDownContent>
        </DropDown>

    );
};

const DropDown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropDownContent = styled.div`
    display: ${props => props.visibility};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const Options = styled.p`
    color: ${BLACK};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
        background-color: #f1f1f1;
    }
`;