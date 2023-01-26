import styled from "styled-components";
import { useState } from "react";
import { DARK_GREY, PRIMARY_FONT, BASE_URL, LIGHT_GREY } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { device } from "../constants/device";
import axios from "axios";

export const EditForm = props => {
    const { id, name, category, setEdit } = props;
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name, category });

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitForm = async () => {
        setLoading(true);

        try {
            await axios.put(`${BASE_URL}/places/${id}`, form);
            window.location.reload();
            setLoading(false);
            setEdit(false);
        } catch (err) {
            console.log(err.response.data);
            setLoading(false);
        }
    };

    return (
        <EditFormContainer>
            <TextContainer>
                <TextInput
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={e => handleForm(e)}
                    disabled={loading}
                />
                <TextInput
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={e => handleForm(e)}
                    disabled={loading}
                />
            </TextContainer>
            <EditIcons
                onClick={() => submitForm()}
                disabled={loading}
            >
                <FontAwesomeIcon icon={faCircleCheck} color="#34A621" />
            </EditIcons>
            <EditIcons
                onClick={() => setEdit(false)}
                disabled={loading}
            >
                <FontAwesomeIcon icon={faCircleXmark} color="#D90D0D" />
            </EditIcons>
        </EditFormContainer>
    );
};

const EditFormContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextInput = styled.input`
    border: 1px solid ${DARK_GREY};
    border-radius: 3px;
    font-family: ${PRIMARY_FONT};
    background-color: ${props => !props.disabled ? "#ffffff" : LIGHT_GREY};
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

const TextContainer = styled.form`
    display: flex;
`;

const EditIcons = styled.div`
    margin-right: 1rem;
`;