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
            <DisplayContainer>
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
            </DisplayContainer>
        </ListItems>
    );
};

const Item = styled.div`
    min-width: 8rem;
    padding: .8rem 0;
    display: flex;
`;

const ListItems = styled.li`
`;

const EditIcons = styled.div`
    margin-right: 2rem;
`;

const DisplayContainer = styled.div`
    display: flex;
    border-top: 1px solid ${DARK_GREY};
    align-items: center;
    justify-content: space-between;
`;
