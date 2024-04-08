import React, {useState} from 'react';
import {usePostContext} from "../../utils/context/postContext.jsx";

const AddPost = () => {

    const [error, setError] = useState('')
    const {state, dispatch} = usePostContext()

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({
            type: 'POST/CHANGE',
            payload: {
                name,
                value
            }
        })
        if(error !== "") {
            setError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.post.title.trim() !== '' && state.post.content.trim() !== '') {
            dispatch({
                type: 'POST/ADD'
            })
        } else {
            setError('Merci de compléter tout les champs')
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: '5px'}}>
            <h1>Ajouter un post</h1>
            <input type={'text'} value={state.post.title} onChange={handleChange} name={'title'} placeholder={'Titre du post'} />
            <textarea name={'content'} value={state.post.content} onChange={handleChange} placeholder={'Contenu du post'} />
            <input type={'submit'} value={'enregistrer'} />
            {
                error && <p style={{color: 'red'}}>{error}</p>
            }
        </form>
    );
};

export default AddPost;