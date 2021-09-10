import React, { useState } from "react";
import { useParams } from "react-router";
const Input = (props) => {
    const { input } = useParams();
    const { word, color, secondColor } = useParams();

    const [isNumber, setIsNumber] = useState(true);

    if (isNaN(+input) === true && isNumber === true) {
        setIsNumber(false);
    }

    return (
        <div className="container d-flex justify-content-center fs-1 ">
            {word == undefined ? (
                isNumber ? (
                    <p>the number is: {input}</p>
                ) : (
                    <p>the word is: {input}</p>
                )
            ) : (
                <p style={{ backgroundColor: color, color: secondColor }}>
                    the word is: {word}
                </p>
            )}
        </div>
    );
};

export default Input;
