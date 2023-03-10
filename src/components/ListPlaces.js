import styled from "styled-components";
import { DARK_GREY, BASE_URL } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RatingForm } from "./RatingForm";
import { OneStar, TwoStars, ThreeStars, FourStars, FiveStars } from "../constants/stars";
import { useState } from "react";
import { EditForm } from "./EditPlace";
import axios from "axios";

export const ListOfPlaces = place => {
    const { id, name, category, rating } = place;
    const [edit, setEdit] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const ratePlace = (rating, placeId) => {
        if (rating === null) {
            return (
                <RatingForm placeId={placeId} />
            );
        } else if (rating === "terrible") {
            return (
                <OneStar />
            );
        } else if (rating === "bad") {
            return (
                <TwoStars />
            );
        } else if (rating === "ok") {
            return (
                <ThreeStars />
            );
        } else if (rating === "good") {
            return (
                <FourStars />
            );
        } else if (rating === "great") {
            return (
                <FiveStars />
            );
        }
    };

    const deletePlace = async () => {
        const confirmation = window.confirm("Are Sure you want this place?");

        if (confirmation) {
            setDeleting(true);
            try {
                await axios.delete(`${BASE_URL}/places/${id}`);
                window.location.reload();
            } catch (err) {
                console.log(err.response.data);
                setDeleting(false);
            }
        }
    };

    const props = {
        setEdit,
        id,
        name,
        category
    };

    return (
        <ListItems>
            <ItemsContainer>
                <Item>{name}</Item>
                <Item>{category}</Item>
                {deleting
                    ?
                    <Item>Deleting...</Item>
                    :
                    <Item>{ratePlace(rating, id)}</Item>
                }
                <Item>
                    <EditIcons
                        onClick={() => setEdit(true)}
                        disabled={deleting}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </EditIcons>
                    <EditIcons
                        onClick={() => deletePlace()}
                        disabled={deleting}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </EditIcons>
                </Item>
            </ItemsContainer>
            <ItemsContainerEdit>
                {edit && <EditForm {...props} />}
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
    pointer-events: ${props => props.disabled ? "none" : "auto"};
`;