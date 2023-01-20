import styled from "styled-components";
import { ListOfPlaces } from "./ListPlaces";

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

const Item = styled.div`
    min-width: 8rem;
    padding: .8rem 0;
    display: flex;
`;
