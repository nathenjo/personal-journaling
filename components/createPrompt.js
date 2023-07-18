import React, { useEffect, useState } from 'react';

export default function CreatePrompt(props) {

    const {} = props;

    const [existingPrompts, setExistingPrompts] = useState([]);

    const callAPI = async () => {
        try {
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
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='create-prompt-wrapper'>
            {existingPrompts.length > 0 && 
                <div className='form-group existing-prompts-wrapper'>
                    <label>Previous Prompts:</label>
                    <select>
                        <option>-</option>
                        {existingPrompts.map((item, index) => {
                            return <option key={index} value={item.id}>{item.text}</option>
                        })}
                    </select>
                </div>
            }
            <button onClick={() => callAPI()}>API Call</button>
            <form className='create-prompt-form'>
                <div className='form-group'>
                    <label className='form-input-label' htmlFor='createPromptName'>Prompt Name:</label>
                    <input className='form-input' id='createPromptName' type='text' />
                </div>
                <div className='form-group'>
                    <label className='form-input-label' htmlFor='createPromptName'>Prompt Question/Statement:</label>
                    <input className='form-input' id='createPromptName' type='text' />
                </div>
            </form>
        </div>
    );
}