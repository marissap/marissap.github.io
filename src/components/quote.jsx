import React from "react";

const Quote = () => {
    const text = (
        <>
        "I want to build something that makes people fall in love." - Cameron Howe, Halt and Catch Fire
        <span>&#10037;</span>
        </>
    );
    const repeated = Array(20).fill(text);

    return (
        <div id="outer">
        <div id="loop">
            {repeated.map((t, i) => (
            <span key={i}>{t}</span>
            ))}
        </div>
        </div>
    );
};

export default Quote;


                        // I want to build something that makes people fall in love." - Cameron Howe, Halt and Catch Fire<span>&#10037;</span>