import React from 'react';

export default function ViewButton(props) {

    const { buttonText, propClass, clickFunction } = props;

    return (
        <button
            className={`button-component ${propClass}`}
            onClick={(e) => clickFunction(e)}
        >
            {buttonText}
        </button>
    );
}