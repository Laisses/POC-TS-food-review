import styled from "styled-components";
import { YELLOW, SECONDARY_FONT } from "../constants/constants";

export const Reviews = () => {
    return (
        <MainContainer>
            <IntroContainer>
                <Header>
                    Coming <span>Soon </span>...
                </Header>
            </IntroContainer>
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
    margin-bottom: .6rem;
    span {
        color: ${YELLOW};
    }
`;
