import React, { useEffect, useState } from 'react';

export default function CreatePrompt(props) {

    const {isLoading, setIsLoading} = props;

    const [existingPrompts, setExistingPrompts] = useState([[]]);

    useEffect(() => {
        const getExistingPrompts = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `https://blooming-refuge-50053-885d686d1776.herokuapp.com/prompt`,
                    {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'access_token': process.env.API_KEY,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                const data = await res.json();
                setIsLoading(false);
                setExistingPrompts([data.data]);
            } catch (err) {
                setExistingPrompts([[]]);
            }
        };
        getExistingPrompts();
    }, [])

    return (
        <div className='create-prompt-wrapper'>
            {existingPrompts.length > 0 && isLoading == false && 
                <div className='form-group existing-prompts-wrapper'>
                    <label>Previous Prompts:</label>
                    <select>
                        <option>-</option>
                        {existingPrompts[0].map((item, index) => {
                            return <option key={index} value={item[0].journal_id}>{item[0].prompt_name}</option>
                        })}
                    </select>
                </div>
            }
            {isLoading == false &&
            <form className='create-prompt-form'>
                <div className='form-group'>
                    <label className='form-input-label' htmlFor='createPromptName'>Prompt Name:</label>
                    <input className='form-input' id='createPromptName' type='text' />
                </div>
                <div className='form-group'>
                    <label className='form-input-label' htmlFor='createPromptName'>Prompt Question/Statement:</label>
                    <input className='form-input' id='createPromptName' type='text' />
                </div>
            </form> }
        </div>
    );
}