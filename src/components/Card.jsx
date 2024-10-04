import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Card(props) {

    // false = regular heart, true = solid heart
    const [isLiked, setIsLiked] = useState(false);

    // When the toggleHeart is executed, isLiked is switched to the opposite of it's current value.
    // Each time the heart is clicked, the solid heart and the regular heart alternate and are displayed accordingly
    const toggleHeart = () => {
        setIsLiked(!isLiked)
    }
    
    return (
        <div className='card'>
            <img src={props.poster} />
            <h1>{props.name}</h1>
            <FontAwesomeIcon icon={isLiked ? faHeart : regularHeart} onClick={toggleHeart} size="lg"/>
        </div>
    )
}

export default Card;