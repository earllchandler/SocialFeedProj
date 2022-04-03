import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);


    }
    

return (

    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='string' value={name} onChange={(event) => setName(event.target.value)}/>
        <label>Post</label>
        <input type='string' value={post} onChange={(event) => setPost(event.target.value)}/>
        <button type='submit'>Post</button>


    </form> 
);


}

export default CreatePost;