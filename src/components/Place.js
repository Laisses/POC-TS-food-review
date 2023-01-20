import styled from "styled-components";
import { OneStar } from "../constants/stars";
import { DARK_GREY } from "../constants/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const places = [
    {
        id: 1,
        name: "Pub",
        category: "Bar",
        rating: "",
    },
    {
        id: 2,
        name: "Restaurante1",
        category: "Restaurante",
        rating: "bom",
    }
];

export const Place = () => {

    const ratePlace = rating => {
        if (rating === "") {
            return <div>avaliar</div>
        } else if (rating === "bom") {
            return (
                <OneStar />
            );
        }
    }

    const ListOfPlaces = place => {
        const { name, category, rating } = place;

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
    }

    return (
        <List>
            <ListTitle>
                <Item>Name</Item>
                <Item>Category</Item>
                <Item>Rating</Item>
                <Item></Item>
            </ListTitle>
            {places.map(p => <ListOfPlaces
                key={p.id}
                {...p}
            />)}
        </List>
    );
};

const List = styled.ul`
    border-radius: 1rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
`;

const ListTitle = styled.div`
    display: flex;
    font-weight: 600;
    margin-bottom: .4rem;
    justify-content: space-between;
`;

const ListItems = styled.li`
    display: flex;
    border-top: 1px solid ${DARK_GREY};
    align-items: center;
    justify-content: space-between;
`;

const Item = styled.div`
    min-width: 8rem;
    padding: .8rem 0;
    display: flex;
`;

const EditIcons = styled.div`
    margin-right: 2rem;
`;
