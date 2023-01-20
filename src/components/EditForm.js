import styled from "styled-components";
import { useState } from "react";
import { DARK_GREY, PRIMARY_FONT } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { device } from "../constants/device";

export const EditForm = props => {
    const {name, category, setEdit} = props;
    const [form, setForm] = useState({name, category});


    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitForm = () => {
        console.log("mandou a mudança")
    };

    return (
        <EditFormContainer>
            <TextContainer>
                <TextInput
                    id="name"
                    name="name"
                    value={name}
                    onChange={e => handleForm(e)}
                />
                <TextInput
                    id="category"
                    name="category"
                    value={category}
                    onChange={e => handleForm(e)}
                />
            </TextContainer>
            <EditIcons onClick={() => submitForm()}>
                <FontAwesomeIcon icon={faCircleCheck} color="#34A621" />
            </EditIcons>
            <EditIcons onClick={() => setEdit(false)}>
                <FontAwesomeIcon icon={faCircleXmark} color="#D90D0D" />
            </EditIcons>
        </EditFormContainer>
    );
};

const EditFormContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
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
    &:focus {
        outline: none;
    }
    @media ${device.laptop} {
        margin-right: 3rem;
    }
`;

const TextContainer = styled.form`
    display: flex;
`;

const EditIcons = styled.div`
    margin-right: 1rem;
`;