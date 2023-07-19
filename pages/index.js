import React, { useEffect, useState } from 'react';

import Nav from '../components/nav';
import CreatePrompt from '../components/createPrompt';
import JournalEntry from '../components/journalEntry';
import LoadingIcon from '../components/loadingIcon';

export default function Index(props) {

    const {} = props;

    const [isLoading, setIsLoading] = useState(false);
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
                {isLoading && <LoadingIcon />}
                <content>
                    {selectedView != 'none' && <h3>{selectedView}</h3>}
                    {selectedView == 'Create Prompt' && <CreatePrompt isLoading={isLoading} setIsLoading={setIsLoading}  />}
                    {selectedView == 'Journal Entry' && <JournalEntry />}
                </content>
                <Nav setSelectedView={setSelectedView} selectedView={selectedView} propClass='main-nav' />
            </section>
        </main>
    );
}