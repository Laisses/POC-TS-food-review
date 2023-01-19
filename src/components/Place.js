//import styled from "styled-components";

const places = [
    {
        id: 1,
        name: "Pub",
        category: "Pub"
    },
    {
        id: 2,
        name: "Restaurante",
        category: "Restaurante"
    }
];

export const Place = () => {

    const ListOfPlaces = place => {
        const {name, category} = place;

        return (
            <li>
                <p>{name}</p>
                <p>{category}</p>
            </li>
        );
    }

    return (
        <ul>
            {places.map(p => <ListOfPlaces
                key={p.id}
                {...p}
            />)}
        </ul>
    );
};