import styled from "styled-components";
import { DARK_GREY } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RatingForm } from "./RatingForm";
import { OneStar } from "../constants/stars";

export const ListOfPlaces = place => {
    const { name, category, rating } = place;

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

    return (
        <ListItems>
                <Item>{name}</Item>
                <Item>{category}</Item>
                <Item>{ratePlace(rating)}</Item>
                <Item>
                    <EditIcons>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </EditIcons>
                    <EditIcons>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </EditIcons>
                </Item>
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
    flex-direction: row;
    border-top: 1px solid ${DARK_GREY};
    justify-content: space-between;
    align-items: center;
`;

const EditIcons = styled.div`
    margin-right: 2rem;
`;