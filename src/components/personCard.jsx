import React from 'react';
const PersonCard = (props) => {

    const { first_name, last_name, age, hair_color } = props
    return (
        <>
            <h1>{last_name}, {first_name} </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hair_color}</p>
        </>
    );
}
export default PersonCard;
