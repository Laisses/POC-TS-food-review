import styled from "styled-components";
import { useState } from "react";
import { DARK_GREY, PRIMARY_FONT } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { device } from "../constants/device";

export const Form = props => {
    const {setOpenForm} = props;
    const [form, setForm] = useState({name: "", category: ""});

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitForm = () => {
        console.log("mandou novo lugar");
        setOpenForm(false);
    };

    return (
        <Container>
            <TextContainer>
                <TextLabel htmlFor="name">name</TextLabel>
                <TextInput
                    id="name"
                    name="name"
                    onChange={e => handleForm(e)}
                />
                <TextLabel htmlFor="category">category</TextLabel>
                <TextInput
                    id="category"
                    name="category"
                    onChange={e => handleForm(e)}
                />
            </TextContainer>
            <EditIcons onClick={() => submitForm()}>
                <FontAwesomeIcon icon={faCircleCheck} color="#34A621" />
            </EditIcons>
            <EditIcons onClick={() => setOpenForm(false)}>
                <FontAwesomeIcon icon={faCircleXmark} color="#D90D0D" />
            </EditIcons>
        </Container>
    );
};

const Container = styled.ul`
    display: flex;
    align-items: center;
    border: 1px solid ${DARK_GREY};
    border-radius: 1rem;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

`;

const TextInput = styled.input`
    border: 1px solid ${DARK_GREY};
    border-radius: 3px;
    font-family: ${PRIMARY_FONT};
    max-width: 7.4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    margin-right: 6rem;
    padding-left: .3rem;
    &:focus {
        outline: none;
    }
    @media ${device.laptop} {
        margin-right: 3rem;
    }
`;

const TextLabel = styled.label`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

const TextContainer = styled.form`
    display: flex;
`;

const EditIcons = styled.div`
    margin-right: 1rem;
`;