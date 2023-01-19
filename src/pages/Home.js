import styled from "styled-components";
import { useState } from "react";
import { Places } from "../components/Places";
import { Form } from "../components/Form";
import { LIGHT_GREY, SECONDARY_FONT, YELLOW } from "../constants/constants";

export const Home = () => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <MainContainer>
            <IntroContainer>
                <Header>
                    Eat, <span>Drink</span> and Review!
                </Header>
                <Description>
                    A fun way to organize all the places you want to visit and remember what you thought about them once you do.
                </Description>
            </IntroContainer>
            <Places />
            <Button
                onClick={() => setOpenForm(!openForm)}>
                add new place
            </Button>
            {openForm && <Form />}
        </MainContainer>
    );
};

const MainContainer = styled.div`
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
`;

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    font-family: ${SECONDARY_FONT};
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    span {
        color: ${YELLOW};
    }
`;

const Description = styled.p`
    font-size: 1.1rem;
    margin-bottom: 2rem;
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