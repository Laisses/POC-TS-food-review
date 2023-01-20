import styled from "styled-components";
import { DARK_GREY } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RatingForm } from "./RatingForm";
import { OneStar } from "../constants/stars";
import { useState } from "react";
import { EditForm } from "./EditForm";

export const ListOfPlaces = place => {
    const { name, category, rating } = place;
    const [edit, setEdit] = useState(true);

    const ratePlace = rating => {
        if (rating === "") {
            return (
                <RatingForm />
            );
        } else if (rating === "bom") {
            return (
                <OneStar />
            );
        }
    };

    const props = {
        setEdit,
        name,
        category
    };

    return (
        <ListItems>
            <ItemsContainer>
                <Item>{name}</Item>
                <Item>{category}</Item>
                <Item>{ratePlace(rating)}</Item>
                <Item>
                    <EditIcons onClick={() => setEdit(true)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </EditIcons>
                    <EditIcons>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </EditIcons>
                </Item>
            </ItemsContainer>
            <ItemsContainerEdit>
                {edit && <EditForm {...props}/>}
            </ItemsContainerEdit>
        </ListItems>
    );
};

const Item = styled.div`
    min-width: 8rem;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const ListItems = styled.li`
    display: flex;
    flex-direction: column;
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid ${DARK_GREY};
    justify-content: space-between;
    align-items: center;
`;

const ItemsContainerEdit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const EditIcons = styled.div`
    margin-right: 2rem;
`;