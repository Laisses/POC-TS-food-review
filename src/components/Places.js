import styled from "styled-components";
import { useState } from "react";
import { device } from "../constants/device";
import { Place } from "./Place";
import { Form } from "../components/NewPlace";
import { YELLOW } from "../constants/constants";

export const Places = () => {
    const [openForm, setOpenForm] = useState(false);
    return (
        <PlacesContainer>
            <Title>
                My places
            </Title>
            <Place />
            <Button
                onClick={() => setOpenForm(true)}
                props={setOpenForm}
            >
                add new place
            </Button>
            {openForm && <Form />}
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

const Button = styled.button`
    width: 10rem;
    height: 2rem;
    color: #fcfcfc;
    background-color: ${YELLOW};
    border: none;
    border-radius: .8rem;
    box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
    &:active {
        transform: translateY(1px);
    }
`;
