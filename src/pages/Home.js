import styled from "styled-components";
import { Places } from "../components/Places";
import { SECONDARY_FONT, YELLOW } from "../constants/constants";

export const Home = () => {
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
    margin-bottom: 1.3rem;
`;
