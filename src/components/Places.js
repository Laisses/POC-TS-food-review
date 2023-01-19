import styled from "styled-components";
import { device } from "../constants/device";
import { Place } from "./Place";

export const Places = () => {
    return (
        <PlacesContainer>
            <h2>
                My places
            </h2>
            <Place />
        </PlacesContainer>
    );
};

const PlacesContainer = styled.div`
    background-color: red;
    margin: 0 auto 1rem auto;
    width: 50rem;
    @media ${device.laptop} {
        width: 40rem;
    }
`;
