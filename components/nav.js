import React, { useEffect } from 'react';
import $ from 'jquery';

import ViewButton from './viewButton';

export default function Nav(props) {

    const { selectedView, setSelectedView, propClass } = props;

    useEffect(() => {
        $('.nav-component').find(`button:contains(${selectedView})`).addClass('selected-view');
        $('.nav-component').find(`button:not(:contains(${selectedView}))`).removeClass('selected-view');
    }, [selectedView])

    useEffect(() => {
        $('.nav-component').find('button').removeClass('selected-view');
    }, [])

    const buttonClickFunc = (e) => {
        if (selectedView == e.target.innerText) {
            setSelectedView('none');
        } else {
            setSelectedView(e.target.innerText);
        }
    }

    return (
        <nav className={`nav-component ${propClass}`}>
            <ViewButton buttonText='Create Prompt' propClass='nav-component-button' clickFunction={buttonClickFunc} />
            <ViewButton buttonText='Journal Entry' propClass='nav-component-button' clickFunction={buttonClickFunc} />
            <ViewButton buttonText='Manage Account' propClass='nav-component-button' clickFunction={buttonClickFunc} />
        </nav>
    );
}