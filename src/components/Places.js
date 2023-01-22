import styled from "styled-components";
import { device } from "../constants/device";
import { Place } from "./Place";

export const Places = () => {
    return (
        <PlacesContainer>
            <Title>
                My places
            </Title>
            <Place />
        </PlacesContainer>
    );
};

const PlacesContainer = styled.div`
    margin: 0 auto 1rem auto;
    width: 50rem;
    @media ${device.laptop} {
        width: 40rem;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.3rem;
`;
