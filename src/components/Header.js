import styled from "styled-components";
import { LIGHT_GREY, BLACK, PRIMARY_FONT } from "../constants/constants";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

export const Header = () => {
    return (
        <NavBar>
            <StyledLinks to="/">
                <Logo src={logo} alt="eat, drink, review logo"/>
            </StyledLinks>
            <NavItem>Hello, you!</NavItem>
            <Div>
                <StyledLinks to="/reviews">
                    <NavItem>My Reviews</NavItem>
                </StyledLinks>
                <StyledLinks to="/">
                    <NavItem>My Profile</NavItem>
                </StyledLinks>
                <StyledLinks to="/">
                    <NavItem><Span>Sign Out</Span></NavItem>
                </StyledLinks>
            </Div>
        </NavBar>
    );
};

const NavBar = styled.div`
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    border-bottom: 1px solid #EDEDED;
    background-color: ${LIGHT_GREY};
    margin-bottom: 2rem;
`;

const Logo = styled.img`
    width: 8rem;

`;

const StyledLinks = styled(Link)`
    text-decoration: none;
`;

const NavItem = styled.p`
    color: ${BLACK};
    font-family: ${PRIMARY_FONT};
    font-size: 1.2rem;
    margin-left: 1.8rem;
`;

const Span = styled.span`
    font-weight: 600;
`;

const Div = styled.div`
    display: flex;
`;