import React, { useState } from 'react';

export default function CreatePrompt(props) {

    const {} = props;

    const [existingPrompts, setExistingPrompts] = useState([{'id': '890g371h04', 'text': 'Journal Prompt 1'}]);

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

            <form className='create-prompt-form'>
                <div className='form-group'>
                    <label className='form-input-label' htmlFor='createPromptName'>Prompt Name:</label>
                    <input className='form-input' id='createPromptName' type='text' />
                </div>
                <div className='form-group'>
                    <label className='form-input-label' htmlFor='createPromptName'>Prompt Content:</label>
                    <input className='form-input' id='createPromptName' type='text' />
                </div>
            </form>
        </div>
    );
}