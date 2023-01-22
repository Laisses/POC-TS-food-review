import styled from "styled-components";
import { useState } from "react";
import { YELLOW } from "../constants/constants";
import { Form } from "../components/NewPlace";

export const NewPlaceButton = () => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenForm(true)}>
                add new place
            </Button>
            {openForm && <Form setOpenForm={setOpenForm} />}
        </>
    );
};

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

