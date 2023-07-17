import React, { useEffect, useState } from 'react';

export default async function CreatePrompt(props) {

    const [existingPrompts, setExistingPrompts] = useState([]);

    // const callAPI = async () => {
    //     try {
    //         const res = await fetch(
    //             `https://blooming-refuge-50053-885d686d1776.herokuapp.com/prompt`,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'access_token': 'dSvejbzIMl6eDZlfjI7BaF5a4w6vcNJRAI5UxCRdjczidooYqFQOtiCxzJ2FarQe',
    //                 },
    //             }
    //         );
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div className='create-prompt-wrapper'>
            

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