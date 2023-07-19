import React, { useEffect, useState } from 'react';

import Nav from '../components/nav';
import CreatePrompt from '../components/createPrompt';
import JournalEntry from '../components/journalEntry';

export default function Index(props) {

    const {} = props;

    const [selectedView, setSelectedView] = useState('none');

    useEffect(() => {
        console.log('Home component mounted');
    }, [])
        
    useEffect(() => {
        console.log('Selected view state change');
    }, [selectedView])

    return (
        <main className='main-wrapper'>
            <section className='main-section'>
                <h1>Personal Journaling Application</h1>
                <content>
                    {selectedView != 'none' && <h3>{selectedView}</h3>}
                    {selectedView == 'Create Prompt' && <CreatePrompt />}
                    {selectedView == 'Journal Entry' && <JournalEntry />}
                </content>
                <Nav setSelectedView={setSelectedView} selectedView={selectedView} propClass='main-nav' />
            </section>
        </main>
    );
}