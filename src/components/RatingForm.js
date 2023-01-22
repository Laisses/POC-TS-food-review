import { useState } from "react";
import styled from "styled-components";
import { BLACK, BASE_URL } from "../constants/constants";
import { RatingButton } from "./RatingButton";
import axios from "axios";

export const RatingForm = ({ placeId }) => {
    const [display, SetDisplay] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendReview = async review => {
        setLoading(true);
        try {
            await axios.patch(`${BASE_URL}/${placeId}`, { rating: review })
            window.location.reload();
        } catch (err) {
            console.log(err.response.data);
            setLoading(false);
        }
    };

    return (
        <>
            {loading
                ?
                <DropDown>
                    <RatingButton text="Processing..." status={loading} />
                </DropDown>
                :
                <DropDown onClick={(e) => SetDisplay(!display)}>
                    <RatingButton text="Review" status={loading} />
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
            }
        </>
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