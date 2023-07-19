import React, { useEffect } from 'react';

export default function JournalEntry(props) {

    const {} = props;

    useEffect(() => {
        console.log('Journal entry component mount');
    }, [])
    return (
        <div>
            Journal Entry
        </div>
    );
}