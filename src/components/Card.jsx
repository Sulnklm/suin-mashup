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
        <div className='border-1 w-[15rem] h-[20rem] m-[3rem] rounded-lg'>
            <img className="w-[15rem] h-[20rem] object-cover" src={props.imgUrl} alt={props.title} />
            <h1>{props.title}</h1>
            <FontAwesomeIcon icon={isLiked ? faHeart : regularHeart} onClick={toggleHeart} size="lg"/>
        </div>
    )
}

export default Card;