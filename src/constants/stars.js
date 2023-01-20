import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {YELLOW} from "../constants/constants";

export const OneStar = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </>
    );
}

export const TwoStars = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </>
    );
};

export const ThreeStars = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </>
    );
};

export const FourStars = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} />
        </>
    );
};

export const FiveStars = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
            <FontAwesomeIcon icon={faStar} color={YELLOW}/>
        </>
    );
};

