import styled from "styled-components";
import { SECONDARY_FONT, LIGHT_GREY, BLACK, PRIMARY_FONT } from "../constants/constants";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

export const Header = () => {
    return (
        <NavBar>
            <StyledLinks>
                <StyledLinks>
                    <Logo src={logo} />
                </StyledLinks>
            </StyledLinks>
            <StyledLinks to="/reviews">
                    <NavItem>My Reviews</NavItem>
                </StyledLinks>
            <Div>

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
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.12);
    background-color: ${LIGHT_GREY};
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
    margin-right: 1.8rem;
`;

const Span = styled.span`
    font-weight: 600;
`;

const Div = styled.div`
    display: flex;
`;