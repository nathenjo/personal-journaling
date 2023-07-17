import React, { useEffect, useState } from 'react';

import Nav from '../components/nav';
import CreatePrompt from '../components/createPrompt';

export default function Index(props) {

    const {} = props;

    const [selectedView, setSelectedView] = useState('none');
        
    useEffect(() => {
        
    }, [selectedView])

    return (
        <main className='main-wrapper'>
            <section className='main-section'>
                <h1>Personal Journaling Application</h1>
                <content>
                    {selectedView != 'none' && <h3>{selectedView}</h3>}
                    {selectedView == 'Create Prompt' && <CreatePrompt />}
                </content>
                <Nav setSelectedView={setSelectedView} selectedView={selectedView} propClass='main-nav' />
            </section>
        </main>
    );
}