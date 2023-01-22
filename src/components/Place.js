import styled from "styled-components";
import axios from "axios";
import { ListOfPlaces } from "./ListPlaces";
import { BASE_URL } from "../constants/constants";
import { useEffect, useState } from "react";
import { NewPlaceButton } from "./NewPlaceButton";

export const Place = () => {
    const [places, setPlaces] = useState(undefined);

    useEffect(() => {
        getPlaces();
    }, []);

    const getPlaces = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/`);
            setPlaces(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    if (!places) {
        return (
            <NoItemMessage>Loading...</NoItemMessage>
        );
    } else if (places.length === 0) {
        return (
            <>
                <NoItemMessage>You hanven't added a place yet</NoItemMessage>
                <NewPlaceButton />
            </>

        );
    } else if (places.length > 0) {
        return (
            <>
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
                <NewPlaceButton />
            </>
        );
    }
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

const NoItemMessage = styled.h2`
    margin: 4rem;
`;
